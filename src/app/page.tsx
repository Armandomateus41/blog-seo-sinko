import AssuntosMaisAcessados from "@/components/AssuntosMaisAcessados";
import DeOlhoNoMercado from "@/components/DeOlhoNoMercado";
import NaveguePorCategoria from "@/components/NaveguePorCategoria";
import Footer from "@/components/Footer";
import NovoHeader from "@/components/NovoHeader";
import MaisLidasPrincipal from "@/components/MaisLidasPrincipal";
import QuatroCardsSimples from "@/components/QuatroCardsSimples";
import UltimasNoticiasDuplo from "@/components/UltimasNoticiasDuplo";

import Destaques from "@/components/Destaques";

async function HomePage() {
  // Se necessário, você pode obter dados e passá-los para os componentes.
  return (
    <div  className="overflow-x-hidden">
      {/* Seções Importadas */}
      <NovoHeader />
      <main className="max-w-[1440px] mx-auto px-6 py-10">
      <Destaques />
      <MaisLidasPrincipal />
      <QuatroCardsSimples />
      <UltimasNoticiasDuplo />
      <AssuntosMaisAcessados />
      <DeOlhoNoMercado />
      <NaveguePorCategoria />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
