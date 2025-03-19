import Link from "next/link";

import { Newspaper, CreditCard, Banknote, Gift } from "lucide-react";

export default function NaveguePorCategoria() {
  const categories = [
    {
      icon: <Newspaper size={24} />,
      title: "Notícias",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Conta digital",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Banknote size={24} />,
      title: "Organização financeira",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Gift size={24} />,
      title: "Benefícios",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="mt-12 max-w-[1440px] mx-auto px-6">
   
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Navegue por categoria</h2>
        <Link href="#" className="text-sm text-[#00bcd4] font-bold">
          Ver mais
        </Link>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4"
          >
          
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-gray-800">
                {cat.title}
              </h3>
              <div className="text-[#00bcd4]">
                {cat.icon}
              </div>
            </div>


            <hr className="border-gray-200 mb-2" />

           
            <p className="text-sm text-gray-500">
              {cat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
