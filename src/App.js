import Bonus from "./components/Bonus/Bonus";
import Depositions from "./components/Depositions/Depositions";
import Header from "./components/Header/Header";
import MainSection from "./components/Main Section/MainSection";
import MesaPosta from "./components/Mesa Posta/MesaPosta";
import Offer from "./components/Offer/Offer";
import Questions from "./components/Questions/Questions";
import Summary from "./components/Summary/Summary";
import Call from "./components/Call/Call";
import Presentation from "./components/Presentation/Presentation";
import Benefits from "./components/Benefits/Benefits";
import Clients from "./components/Clients/Clients";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Call/>
      <Presentation/>
      <MesaPosta />
      <Benefits/>
      <Bonus />
      <Summary />
      <Offer />
      <Clients/>
      <Depositions />
      <div className="Questions">
        <h2>Perguntas </h2>
        <br />
        <span>frequentes</span>
        <Questions question="" answer="" />
      </div>
    </div>
  );
}
