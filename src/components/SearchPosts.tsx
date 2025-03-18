"use client"; // 🚀 Este componente roda no cliente

import { useState } from "react";
import Link from "next/link";

export default function SearchPosts({ posts }: { posts: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra os posts com base no termo de busca
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Últimos Posts</h1>

      {/* Barra de Busca */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
      </div>

      {/* Links para Categorias */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        <div className="flex gap-4">
          <Link href="/categorias/seo" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            SEO
          </Link>
          <Link href="/categorias/frontend" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Frontend
          </Link>
          <Link href="/categorias/nextjs" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Next.js
          </Link>
        </div>
      </div>

      {/* Lista de Posts */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
              <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline mt-2 inline-block">
                Ler mais →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Nenhum post encontrado.</p>
        )}
      </div>
    </div>
  );
}
