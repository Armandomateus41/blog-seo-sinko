import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "@/lib/posts";
import { generateSEO } from "@/lib/seo";
import { Metadata } from "next";
import Image from "next/image";
import Comments from "@/components/Comments";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return generateSEO({
    title: post.title,
    description: post.description,
    url: `http://localhost:3000/posts/${params.slug}`,
    image: post.image ? `/images/${post.image}` : "/default-og-image.jpg",
  });
}

export default async function PostPage({ params }: { params: { slug?: string } }) {
  if (!params?.slug) {
    return notFound();
  }

  const post = await getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Título do Post */}
      <h1 className="text-5xl font-extrabold text-center mb-6">{post.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-center text-lg mb-6">
        Publicado em {new Date().toLocaleDateString()}
      </p>

      {/* Imagem Destacada */}
      {post.image && (
        <div className="relative w-full h-[500px] mb-6">
          <Image
            src={`/images/${post.image}`}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      {/* Conteúdo do Post */}
      <div className="prose dark:prose-invert mx-auto max-w-3xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Seção de Compartilhamento */}
      <div className="flex justify-center gap-4 mt-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          📘 Compartilhar no Facebook
        </button>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition">
          🐦 Compartilhar no Twitter
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          📩 Compartilhar no WhatsApp
        </button>
      </div>

      {/* Seção de Comentários */}
      <div className="mt-12">
        <Comments postSlug={params.slug} />
      </div>
    </div>
  );
}
