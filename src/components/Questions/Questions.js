import React, { useState } from "react";

import "./questions.css";
import { Icon } from "@iconify/react";

const questionsAndAnswers = [
  {
    question: "Pergunta que todas as pessoas fazem?",
    answer:
      "abcd",
  },
  {
    question: "Pergunta que todas as pessoas fazem?",
    answer:
      "efgh",
  },
  {
    question: "Pergunta que todas as pessoas fazem?",
    answer:
      "ijkl",
  },
  {
    question: "Pergunta que todas as pessoas fazem?",
    answer:
      "mnop",
  },
];

function Questions() {
  const [showAnswer, setShowAnswer] = useState(false);

  function openQuestion(index){
    var respostaSelecionada = questionsAndAnswers[index].answer;
    console.log(respostaSelecionada);
     setShowAnswer(true)
  }

  return questionsAndAnswers.map((question, index) => (
    <div className="questionsBox" key={index}>
      <div className="questionCard">
        <div className="questionTitleCard">
          <button onClick={() => openQuestion(index)}>
            <Icon icon="bx:bx-plus-medical" style={{ fontSize: "26px" }} />
            <h3 className="questionTitle">{question.question}</h3>
          </button>
        </div>

        <div className="questionAnswer" className={showAnswer ? null : 'hidden'}>
          <p className="questionExplaining">{question.answer}</p>
        </div>
      </div>
    </div>
  ));
}

export default Questions