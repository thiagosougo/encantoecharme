import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Question.css";

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleQuestion = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="questionsBox">
      <div className="questionCard">
        <div className="questionTitleCard">
          <button onClick={toggleQuestion}>
            <div>
              <Icon icon="bx:bx-plus-medical" style={{ fontSize: "20px" }} />
            </div>
            <h3 className="questionTitle">{question.question}</h3>
            <div></div>
          </button>
        </div>

        {showAnswer && (
          <div className="questionAnswer">
            <p className="questionExplaining">{question.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
