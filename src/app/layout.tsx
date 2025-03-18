import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SINKO - Blog SEO",
  description: "Um blog otimizado para SEO usando Next.js e Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body id="top" className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Sem cabeçalho aqui */}
        <main>{children}</main>
        {/* Se quiser, mantenha ou remova o rodapé aqui */}
      </body>
    </html>
  );
}
