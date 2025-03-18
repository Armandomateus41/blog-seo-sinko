import Image from "next/image";

export default function DestaqueAbaixoCabecalho() {
  // Exemplo de dados dos 4 itens
  const items = [
    {
      image: "1.png",
      text: "Conheça o novo empréstimo consignado para militares da Marinha",
    },
    {
      image: "2.png",
      text: "Mudanças no salário mínimo, PIS/Pasep e aposentadoria de militares",
    },
    {
      image: "3.png",
      text: "Margem consignável: o que é, onde consultar e como saber",
    },
    {
      image: "4.png",
      text: "Margem consignável: o que é, onde consultar e como saber",
    },
  ];

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Grid com 4 colunas (no mobile 1 ou 2 colunas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] shadow-md p-4 flex flex-col"
            >
              {/* Imagem arredondada de 10px */}
              <div className="relative w-full h-[150px] rounded-[10px] overflow-hidden mb-2">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.text}
                  fill
                  className="object-cover rounded-[10px]"
                />
              </div>

              {/* Texto “Em alta” */}
              <span className="text-sm text-orange-500 font-semibold flex items-center gap-1">
                🔥 Em alta
              </span>

              {/* Breve descrição */}
              <p className="text-gray-700 text-sm mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
