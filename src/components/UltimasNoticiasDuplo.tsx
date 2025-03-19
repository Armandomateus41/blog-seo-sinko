"use client";

import Image from "next/image";

export default function UltimasNoticiasDuplo() {

  const noticias = [
    {
      image: "1.png",
      category: "Notícias",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Lost",
      date: "05 Nov. 2024",
    },
    {
      image: "2.png",
      category: "Notícias",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Lost",
      date: "05 Nov. 2024",
    },
  ];

  function handleArrasta() {
    alert("Aqui você pode implementar a lógica de avançar para outro conteúdo!");
  }

  return (
    <section className="max-w-[1440px] mx-auto px-6 mt-12">
      {/* Título da seção */}
      <h2 className="text-3xl font-bold mb-6">Últimas notícias</h2>


      <div className="flex gap-6">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="relative w-1/2 h-[360px] rounded-[10px] overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 bg-white dark:bg-gray-800"
          >
        
            <div className="relative w-full h-full">
              <Image
                src={`/images/${noticia.image}`}
                alt={`Notícia ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>


            <div
              className="absolute inset-0 text-white p-6 flex flex-col justify-end"
              style={{
                backgroundColor: "rgba(20, 184, 166, 0.8)", 
                clipPath: "inset(52% 46% 0 0)", 
              }}
            >
              {/* Rótulo de categoria */}
              <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full font-semibold mb-2 w-fit">
                {noticia.category}
              </span>
              {/* Título */}
              <h3 className="text-lg font-semibold">{noticia.title}</h3>
              {/* Autor e data */}
              <p className="text-sm mt-2">
                por {noticia.author} | {noticia.date}
              </p>
              {/* Botão de arrasta (aparece apenas no segundo card) */}
              {index === 1 && (
                <button
                  onClick={handleArrasta}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white rounded-full w-10 h-10 text-xl shadow-md hover:bg-teal-800 hover:scale-110 transition flex items-center justify-center"
                  aria-label="Avançar"
                >
                  →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
