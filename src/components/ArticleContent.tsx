"use client"; 
// Se não precisar de interatividade, pode remover

import Image from "next/image";

export default function ArticleContent() {
  return (
    <article className="flex-1">
      {/* Categorias no topo (opcional) */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
          Benefícios
        </span>
        <span className="text-sm bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
          Notícias
        </span>
      </div>

      {/* Título do Artigo */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        8 Principais indicadores de vendas para maximizar resultados
      </h1>

      {/* Metadados: data, tempo de leitura, autor */}
      <div className="text-sm text-gray-500 mb-6">
        <span>Publicado em 20/01/2025</span>
        <span className="mx-2">—</span>
        <span>Tempo de leitura: 14 minutos</span>
        <span className="mx-2">—</span>
        <span>Por Maria, do SINKO</span>
      </div>

      {/* Imagem Principal do Artigo (com borda 10px) */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-[10px] overflow-hidden mb-6">
        <Image
          src="/images/3.png" // Ajuste conforme seu arquivo
          alt="Duas pessoas segurando smartphones"
          fill
          className="object-cover"
        />
      </div>

      {/* Descrição breve / Introdução */}
      <p className="text-gray-700 mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...
      </p>

      {/* Subtítulo 1 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Confira o novo valor do teto do INSS
      </h2>
      <p className="text-gray-700 mb-4">
        Aqui você pode inserir um texto explicando o novo valor do teto do INSS. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
        cubilia curae.
      </p>

      {/* Subtítulo 2 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Entenda quais taxas são cobradas
      </h2>
      <p className="text-gray-700 mb-4">
        Antes de contratar qualquer serviço financeiro, é fundamental entender as taxas envolvidas. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, arcu vitae elementum 
        luctus, ex urna consectetur enim, quis pellentesque quam lorem vel est.
      </p>

      {/* Exemplo de Tabela */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Exemplo de Tabela
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">Indicador</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Descrição</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Ticket Médio</td>
              <td className="px-4 py-2 border border-gray-300">Valor médio das vendas em um período.</td>
              <td className="px-4 py-2 border border-gray-300">R$ 200,00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Taxa de Conversão</td>
              <td className="px-4 py-2 border border-gray-300">Percentual de visitantes que se tornam clientes.</td>
              <td className="px-4 py-2 border border-gray-300">5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conclusão */}
      <p className="text-gray-700 mb-6">
        Lorem ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
      </p>

      {/* Tags no final do artigo */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-gray-600">Tags:</span>
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          Organização Financeira
        </span>
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          Benefícios
        </span>
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          Cartão de crédito
        </span>
      </div>
    </article>
  );
}
