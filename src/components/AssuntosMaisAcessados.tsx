"use client"; // Necessário se estiver usando Next.js 13 e quiser interatividade (ex.: onClick)

import Image from "next/image";

export default function AssuntosMaisAcessados() {
  const tags = [
    "Notícias",
    "Conta digital",
    "Organização financeira",
    "Benefícios",
    "Cartão de crédito",
  ];

  const cards = [
    {
      image: "1.png",
      category: "Organização financeira",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2025",
    },
    {
      image: "2.png",
      category: "Benefícios",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2025",
    },
    {
      image: "3.png",
      category: "Cartão de crédito",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2025",
    },
    {
      image: "4.png",
      category: "Conta digital",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2025",
    },
  ];

  return (
    // Fundo geral da seção (ocupando toda a largura da tela)
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f4f4f9] mt-12 border-t pt-6 pb-10">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Título da Seção */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Assuntos mais acessados
        </h2>

        {/* Tags */}
        <div className="flex justify-center gap-3 flex-wrap mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#e0f7fa] text-[#00796b] px-4 py-2 rounded-full cursor-pointer transition hover:bg-[#b2ebf2]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Subtítulo */}
        <h3 className="text-xl mb-6">Planejar para conquistar</h3>

        {/* Grid de Cards */}
        <section className="max-w-[1440px] mx-auto px-4">
          {/*
            - grid-cols-1 no mobile, 4 colunas a partir de telas md (md:grid-cols-4).
            - gap-6 define espaçamento entre colunas.
            - md:divide-x md:divide-gray-200 cria linha de separação vertical entre colunas em telas md ou maiores.
          */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:divide md:divide-gray-300 justify-items-center">
            {cards.map((card, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-start">
                  {/*
                    Imagem com borda de 1px (border-gray-200), 
                    bordas arredondadas (rounded-[10px]) e overflow-hidden 
                    para manter o efeito nos cantos.
                  */}
                  <div className="relative w-[280px] h-36 mb-2 border border-gray-200 rounded-[10px] overflow-hidden">
                    <Image
                      src={`/images/${card.image}`}
                      alt={`Card ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Categoria */}
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                    {card.category}
                  </span>

                  {/* Texto */}
                  <p className="text-gray-600 text-sm mt-2">
                    {card.text}
                  </p>

                  {/* Data */}
                  <p className="text-sm text-gray-500 mt-2">
                    {card.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
