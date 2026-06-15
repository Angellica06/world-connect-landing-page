import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Destinos from "./components/sections/Destinos";
import ComoFunciona from "./components/sections/ComoFunciona";
import Beneficio from "./components/sections/Beneficio";
import Depoimentos from "./components/sections/Depoimentos";
import Contato from "./components/sections/Contato";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Destinos />
      <ComoFunciona />
      <Beneficio />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
