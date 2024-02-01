import CorrectAnswers from "./CorrectAnswers";
import { useState } from "react";

import trophy from "./../trophy.png";

function Cover({ correct, questions, history }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="bg-colorBgItem p-20 flex flex-col items-center gap-y-8 rounded-inputRounded">
        <img src={trophy} alt="trophy" />
        <h1 className="text-30 text-white ">
          Вы верно ответил на <span className="text-green-500">{correct}</span>{" "}
          из {questions.length} вопросов
        </h1>
        <button onClick={() => setOpenModal(!openModal)} className="p-5 bg-green-500 rounded-inputRounded z-10 hover:bg-green-600 hover:scale-110 transition-transform transition-colors">
          {openModal ? "Скрыть ответы" : "Просмотреть ответы"}
        </button>
        <a href="">
          <button className="p-5 bg-green-500 rounded-inputRounded hover:bg-green-600 hover:scale-110 transition-transform transition-colors">
            Пройти еще раз
          </button>
        </a>
      </div>
      {openModal ? <CorrectAnswers questions={questions} history={history}/> : null}
    </div>
  );
}

export default Cover;
