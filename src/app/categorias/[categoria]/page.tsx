import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// ✅ Corrige a tipagem do `params` no Next.js 15
export default async function CategoriaPage({ params }: { params: { categoria?: string } }) {
  if (!params || !params.categoria) {
    return notFound();
  }

  // ✅ Carrega os posts e filtra pela categoria informada
  const posts = await getAllPosts();
  const postsFiltrados = posts.filter((post) => post.categoria === params.categoria);

  if (postsFiltrados.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Posts sobre {params.categoria.toUpperCase()}</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {postsFiltrados.map((post) => (
          <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline mt-2 inline-block">
              Ler mais →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Garante que o Next.js gere as páginas estáticas corretamente
export async function generateStaticParams() {
  const categorias = ["seo", "frontend", "nextjs"]; // 🔹 Lista de categorias disponíveis
  return categorias.map((categoria) => ({ categoria }));
}
