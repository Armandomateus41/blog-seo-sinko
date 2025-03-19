"use client";
// Se não precisar de interatividade (onClick, useState, etc.), pode remover esta linha

import NovoHeader from "@/components/NovoHeader";
import ArticleContent from "@/components/ArticleContent";
import ArticleBottomSection from "@/components/ArticleBottomSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function PostPage() {
  return (
    <>
      {/* Cabeçalho */}
      <NovoHeader />

      {/* Contêiner principal do artigo e sidebar */}
      <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8">
        {/* Coluna principal (artigo) */}
        <main className="flex-1">
          <ArticleContent />
          <ArticleBottomSection />
        </main>

        {/* Sidebar (coluna à direita em telas grandes) */}
        <Sidebar />
      </div>

      {/* Rodapé */}
      <Footer />
    </>
  );
}
