import Bonus from "./components/Bonus/Bonus";
import Cards from "./components/Cards/Cards";
import Depositions from "./components/Depositions/Depositions";
import Header from "./components/Header/Header";
import MainSection from "./components/Main Section/MainSection";
import MesaPosta from "./components/Mesa Posta/MesaPosta";
import Offer from "./components/Offer/Offer";
import Questions from "./components/Questions/Questions";
import Summary from "./components/Summary/Summary";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <MesaPosta />
      <div className="Card">
        <Cards
          titulo="Aulas Práticas"
          conteudo=" Conteúdo 100% aplicável em qualquer repertório. Você receberá demonstrações, explicações, exercícios e tarefas para efetivar sua evolução na etiqueta europeia."
        />
        <Cards
          titulo="Mentoria ao vivo"
          conteudo="Alunas do MARATONA MESA POSTA poderão fazer parte das Alunas VIP, que terão direito a um ano de mentoria ao vivo no ZOOM - 24 aulas (opcional)."
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
          titulo="Acesso por um ano"
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
    </div>
  );
}
