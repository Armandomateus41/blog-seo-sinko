"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArticleBottomSection() {
  return (
    <section className="mt-10">
      {/* "Leia também" com textos menores */}
      <div className="mt-8">
        {/* Título da seção menor: text-base ou text-lg */}
        <h2 className="text-base font-bold mb-4">Leia também</h2>

        {/* Container dos cartões, cada um com texto menor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <Link href="#" className="group flex gap-3 items-start">
            {/* Imagem arredondada de 10px */}
            <div className="relative w-20 h-20 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/1.png"
                alt="Post 1"
                fill
                className="object-cover"
              />
            </div>
            {/* Texto do Card (títulos menores) */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:underline leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </h3>
              <p className="text-xs text-gray-500 mt-1">01/11/2024</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="#" className="group flex gap-3 items-start">
            <div className="relative w-20 h-20 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/8.png"
                alt="Post 2"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:underline leading-snug">
                Saiba mais sobre o novo teto do INSS
              </h3>
              <p className="text-xs text-gray-500 mt-1">01/11/2024</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="#" className="group flex gap-3 items-start">
            <div className="relative w-20 h-20 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/9.png"
                alt="Post 3"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:underline leading-snug">
                Como organizar suas finanças pessoais
              </h3>
              <p className="text-xs text-gray-500 mt-1">01/11/2024</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Texto final (opcional) */}
      <div className="mt-8">
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...
        </p>
      </div>

      {/* Seção de Tags com títulos menores */}
      <div className="mt-6">
        <h2 className="text-base font-bold mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            Notícias
          </span>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            Organização Financeira
          </span>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            Benefícios
          </span>
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            Cartão de crédito
          </span>
        </div>
      </div>
    </section>
  );
}
