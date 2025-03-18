import Link from "next/link";
import { Search } from "lucide-react";

export default function NovoHeader() {
  return (
    // w-screen para ocupar toda a largura da tela
    // bg-white para fundo branco, shadow para leve sombra
    <header className="w-screen bg-white shadow">
      {/*
        Removemos o container duplicado aqui.
        Basta usar max-w e mx-auto para centralizar
        e px para espaçamento.
      */}
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-teal-600 text-2xl font-bold">
          SINKO
        </span>
        
        {/* Menu de Navegação */}
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-gray-800 hover:text-teal-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categorias" className="text-gray-800 hover:text-teal-600 transition">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/noticias" className="text-gray-800 hover:text-teal-600 transition">
                Notícias
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Botão de Busca */}
        <button className="flex items-center gap-2 bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition">
          <Search size={18} />
          <span>Buscar</span>
        </button>
      </div>
    </header>
  );
}
