import Image from "next/image";
import Link from "next/link";

export default function MaisLidasPrincipal() {
  return (
    <section className="max-w-[1440px] mx-auto mt-12 px-6">
    
      <div className="max-w-[1232px] mx-auto">
       
        <h2 className="text-3xl font-bold mb-6">Mais Lidas</h2>

    
        <div className="relative w-full h-[465px] bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg mb-8">
          <div className="relative w-full h-full">
            <Image
              src="/images/3.png" 
              alt="Post em destaque"
              fill
              className="object-cover opacity-80"
            />
          </div>

   
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex gap-2">
              <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full">
                Benefícios
              </span>
              <span className="text-sm bg-green-500 text-white px-3 py-1 rounded-full">
                Notícias
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-3">
              8 Principais Indicadores de Vendas para Maximizar Resultados
            </h3>
            <p className="text-sm mt-2">
              Lorem Ipsum é simplesmente dummy text da indústria de impressão e 
              composição. Ele tem sido o texto padrão desde os anos 1500...
            </p>
            <Link href="#" className="text-white hover:underline mt-3 inline-block">
              Ler mais →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
