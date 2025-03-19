import Image from "next/image";

export default function QuatroCardsSimples() {
  // Exemplo de dados dos 4 cards
  const cards = [
    {
      category: "Benefícios",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2024",
      image: "1.png",
    },
    {
      category: "Notícias",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2024",
      image: "2.png",
    },
    {
      category: "Notícias",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2024",
      image: "3.png",
    },
    {
      category: "Benefícios",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01/11/2024",
      image: "4.png",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 mt-12">
    
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:divide-x md:divide-gray-200">
        {cards.map((card, index) => (
         
          <div key={index} className="px-4">
            <div className="flex flex-col items-start">
          
              <div className="relative w-full h-40 mb-2 border border-gray-200 rounded-[10px] overflow-hidden">
                <Image
                  src={`/images/${card.image}`}
                  alt={`Card ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            
              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                {card.category}
              </span>
       
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {card.text}
              </p>
             
              <p className="text-sm text-gray-500 mt-2">{card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
