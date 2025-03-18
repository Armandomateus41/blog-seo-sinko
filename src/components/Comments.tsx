"use client";

import { useEffect, useState } from "react";

export default function Comments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/api/comments?postSlug=${postSlug}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postSlug, name, content }),
    });

    if (res.ok) {
      setName(""); // ✅ Reseta os campos após envio
      setContent("");
      fetch(`/api/comments?postSlug=${postSlug}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Comentários</h2>

      {/* Formulário de Comentários */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)} // ✅ Atualiza o estado corretamente
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <textarea
          placeholder="Digite seu comentário..."
          value={content}
          onChange={(e) => setContent(e.target.value)} // ✅ Atualiza o estado corretamente
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
      </form>

      {/* Lista de Comentários */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment: any) => (
            <div key={comment.id} className="p-4 border border-gray-200 rounded mb-2">
              <p className="font-bold">{comment.name}</p>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Nenhum comentário ainda.</p>
        )}
      </div>
    </div>
  );
}
