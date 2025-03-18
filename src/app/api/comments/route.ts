import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

const prisma = new PrismaClient();

// Mapa para armazenar IPs e limitar requisições
const rateLimitMap = new Map();

// Função para verificar Rate Limiting (máx. 3 comentários por minuto)
function isRateLimited(ip: string) {
  const now = Date.now();
  const timeWindow = 60 * 1000; // 1 minuto
  const requests = rateLimitMap.get(ip) || [];

  const recentRequests = requests.filter((timestamp: number) => now - timestamp < timeWindow);
  recentRequests.push(now);

  rateLimitMap.set(ip, recentRequests);
  return recentRequests.length > 3;
}

// ✅ Rota POST: Adiciona um comentário com proteção contra spam
export async function POST(req: Request) {
  const { postSlug, name, content } = await req.json();
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (!postSlug || !name.trim() || !content.trim()) {
    return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
  }

  if (name.length < 3 || content.length < 5) {
    return NextResponse.json({ error: "Nome ou comentário muito curto!" }, { status: 400 });
  }

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Você está comentando muito rápido. Tente novamente em 1 minuto." }, { status: 429 });
  }

  const comment = await prisma.comment.create({
    data: { postSlug, name, content },
  });

  // ✅ Enviar e-mail para o dono do blog
  await sendEmail(
    "Novo Comentário no Blog!",
    `Novo comentário no post: ${postSlug}\n\nNome: ${name}\nComentário: ${content}`
  );

  return NextResponse.json(comment);
}
