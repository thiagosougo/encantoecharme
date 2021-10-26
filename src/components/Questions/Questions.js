import React from "react";
import Question from "./Question/Question";

const questionsAndAnswers = [
  {
    id: 1,
    question: "Como funciona o curso?",
    answer:
      "O MARATONA MESA POSTA 2.0 é um curso exclusivamente online e, ao adquirí-lo, você terá acesso à plataforma do curso em que você pode assistir às videoaulas, comentar caso tenha dúvidas e baixar materiais complementares que vão te ajudar a colocar o conhecimento em prática. O seu acesso fica disponível durante um ano e você pode ver e rever as aulas quantas vezes quiser.",
    show: false,
  },
  {
    id: 2,
    question: "Eu vou receber um certificado?",
    answer:
      "Todas as alunas que completarem pelo menos 80% do curso receberão certificados de conclusão.",
    show: false,
  },
  {
    id: 3,
    question: "Qual o valor do curso?",
    answer:
      "O curso MARATONA MESA POSTA 2.0 está sendo vendido com preço promocional e oferta limitada por U$120.",
    show: false,
  },
  {
    id: 4,
    question: "As vagas são limitadas?",
    answer:
      "Sim, para que seja viável oferecer um acompanhamento mais próximo nos grupos VIPs com as alunas que adquirirem o curso, as vagas para o MARATONA MESA POSTA 2.0 são limitadas.",
    show: false,
  },
  {
    id: 5,
    question: "Onde posso ver mais do seu trabalho?",
    answer:
      "Aproveite para conectar comigo nas redes sociais, lá você encontra mais detalhes do meu trabalho e muitas fotos e vídeos de mesas postas que já fiz, além de registros dos cursos na versão presencial. O @ no Instagram é ec_encantoecharme e no Facebook é Ecienemesaposta. ",
    show: false,
  },
];

function Questions() {
  return questionsAndAnswers.map((question) => (
    <Question question={question} key={question.id} />
  ));
}

export default Questions;
