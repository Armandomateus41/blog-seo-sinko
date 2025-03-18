import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Sobre Nós</h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Adicione uma imagem do autor/blog */}
        <div className="relative w-48 h-48">
          <Image
            src="/images/autor.jpg" // 🔹 Troque pela imagem do autor
            alt="Foto do Autor"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Informações sobre o blog */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-gray-600 dark:text-gray-300">
            Bem-vindo ao **Blog SEO - Next.js**! Este blog é dedicado a compartilhar conhecimento sobre desenvolvimento web, SEO, e otimização de performance usando tecnologias modernas como **Next.js, Tailwind CSS e Markdown**.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Criado por **[Seu Nome]**, desenvolvedor full-stack apaixonado por código limpo, acessibilidade e boas práticas na web. 🚀
          </p>
        </div>
      </div>

      {/* Contatos e redes sociais */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Você pode me encontrar no GitHub, Twitter e LinkedIn!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/seu-usuario" className="text-blue-500 hover:underline" target="_blank">
            GitHub
          </a>
          <a href="https://twitter.com/seu-usuario" className="text-blue-500 hover:underline" target="_blank">
            Twitter
          </a>
          <a href="https://linkedin.com/in/seu-usuario" className="text-blue-500 hover:underline" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
