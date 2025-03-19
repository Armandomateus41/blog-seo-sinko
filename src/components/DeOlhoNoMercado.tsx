import Image from "next/image";

export default function DeOlhoNoMercado() {
  return (
    <section className="mt-12 max-w-[1440px] mx-auto px-6">
      {/* Linha de título e navegação */}
      <div className="flex items-center justify-between mb-6">
        {/* Título à esquerda */}
        <h2 className="text-3xl font-bold">De olho no mercado</h2>

        {/* Navegação à direita */}
        <nav className="flex gap-4 text-sm">
          <span className="cursor-pointer text-[#00bcd4] font-bold">Todos</span>
          <span className="cursor-pointer text-gray-500 hover:text-gray-800 transition">
            Benefícios
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-gray-800 transition">
            Organização financeira
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-gray-800 transition">
            Notícias
          </span>
        </nav>
      </div>

      {/* Primeira linha: 2 cards grandes (imagem em cima) */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Card 1 */}
        <div>
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/1.png" 
              alt="Imagem 1"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="p-4">
            <span className="block text-[#00bcd4] font-bold mb-2">Benefícios</span>
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-xs text-gray-500">01/11/2024</span>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/8.png" // 🔹 Ajuste o nome da imagem
              alt="Imagem 2"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="p-4">
            <span className="block text-[#00bcd4] font-bold mb-2">Notícias</span>
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-xs text-gray-500">01/11/2024</span>
          </div>
        </div>
      </div>

      {/* Segunda linha: 4 sub-cards (imagem lateral, 650×150, 2 colunas x 2 linhas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sub-card 1 */}
        <div className="flex gap-2 items-start">
          <div className="relative w-[650px] h-[150px]">
            <Image
              src="/images/9.png" // 🔹 Ajuste o nome da imagem
              alt="Imagem 3"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#00bcd4] font-bold mb-1">Notícias</span>
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-xs text-gray-500">01/11/2024</span>
          </div>
        </div>

        {/* Sub-card 2 */}
        <div className="flex gap-2 items-start">
          <div className="relative w-[650px] h-[150px]">
            <Image
              src="/images/10.png" // 🔹 Ajuste o nome da imagem
              alt="Imagem 4"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#00bcd4] font-bold mb-1">Benefícios</span>
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-xs text-gray-500">01/11/2024</span>
          </div>
        </div>

        {/* Sub-card 3 */}
        <div className="flex gap-2 items-start">
          <div className="relative w-[650px] h-[150px]">
            <Image
              src="/images/11.png" // 🔹 Ajuste o nome da imagem
              alt="Imagem 5"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#00bcd4] font-bold mb-1">Notícias</span>
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-xs text-gray-500">01/11/2024</span>
          </div>
        </div>

        {/* Sub-card 4 */}
        <div className="flex gap-2 items-start">
          <div className="relative w-[650px] h-[150px]">
            <Image
              src="/images/12.png" // 🔹 Ajuste o nome da imagem
              alt="Imagem 6"
              fill
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#00bcd4] font-bold mb-1">Organização financeira</span>
            <p className="text-sm text-gray-700 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <span className="text-xs text-gray-500">01/11/2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
