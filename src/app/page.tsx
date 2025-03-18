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
    <div>
      {/* Seções Importadas */}
      <NovoHeader />
      <Destaques />
      <MaisLidasPrincipal />
      <QuatroCardsSimples />
      <UltimasNoticiasDuplo />
      <AssuntosMaisAcessados />
      <DeOlhoNoMercado />
      <NaveguePorCategoria />
      <Footer />
    </div>
  );
}
export default HomePage;
