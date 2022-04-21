import Bonus from "./components/Bonus/Bonus";
import Cards from "./components/Cards/Cards";
import Depositions from "./components/Depositions/Depositions";
import Header from "./components/Header/Header";
import MainSection from "./components/Main Section/MainSection";
import MesaPosta from "./components/Mesa Posta/MesaPosta";
import Offer from "./components/Offer/Offer";
import Questions from "./components/Questions/Questions";
import Summary from "./components/Summary/Summary";
import Call from "./components/Call/Call";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Call />
      <Presentation />
      <About />
      <MesaPosta />
      <div className="Card">
        <Cards
          titulo="Aulas Práticas"
          conteudo=" Conteúdo 100% aplicável em qualquer repertório. Você receberá demonstrações, explicações, exercícios e tarefas para efetivar sua evolução na etiqueta europeia."
        />
        <Cards
          titulo="Do básico ao avançado"
          conteudo=" Você aprenderá desde mesa formal, informal, decorativa, ordem dos talheres, recepção e convite, arranjos florais até como se portar em um evento formal, como ser uma boa anfitriã e usar a etiqueta européia."
        />
        <Cards
          titulo="Área vip e suporte"
          conteudo="Você terá acesso a áreas Vip's exclusivas para alunos e suporte para tirar todas as suas dúvidas. "
        />
        <Cards
          titulo="+ de 20 aulas"
          conteudo="Cronograma montado e planejado para sua evolução na etiqueta com mais de 20 aulas gravadas em vídeo e áudios de exercícios - PDF's de Bônus."
        />
        <Cards
          titulo="Certificado de conclusão"
          conteudo="Após completar o curso, você pode baixar e imprimir o seu certificado de conclusão."
        />
        <Cards
          titulo="Acesso por 1 ano"
          conteudo="Ao adquirir o curso, você tem até 1 ano para concluir, podendo acessar de forma ilimitada neste período."
        />
      </div>
      <Bonus />
      <Depositions />
      <Offer />
      <Summary />
      <div className="Questions">
        <h2>Perguntas </h2>
        <br />
        <span>frequentes</span>
        <Questions question="" answer="" />
        
      </div>
      <Footer/>
    </div>
  );
}
