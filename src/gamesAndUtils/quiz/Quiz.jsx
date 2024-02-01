import Cover from "./components/Cover";
import Game from "./components/Game";
import CorrectAnswers from "./components/CorrectAnswers";
import { questions } from "./components/questions";
import { useState } from "react";

function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
//   const [openModal, setOpenModal] = useState(false);
  const [history, setHistory] = useState(Array(questions.length).fill(null));
  const question = questions[step];

  const handleChangeStep = (index) => {
    setHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory[step] = index;
      return updatedHistory;
    });
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };


  return (
    <>
      <div className="flex flex-col items-center mt-40">
        {step !== questions.length ? (
          <Game
            question={question}
            handleChangeStep={handleChangeStep}
            questions={questions}
            step={step}
          />
        ) : (
          <Cover correct={correct} questions={questions} history={history} />
        )}
      </div>
      {/* {openModal ? (
        <CorrectAnswers questions={questions} history={history} />
      ) : null} */}
    </>
  );
}

export default Quiz;
