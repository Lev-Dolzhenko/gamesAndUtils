function Game({ question, handleChangeStep, questions, step }) {
  return (
    <>
      <h3 className="mb-9 bg-colorBgItem py-3 px-20 rounded-inputRounded text-white ">
        {question.title}
      </h3>
      <ul className="flex flex-col gap-y-3 mb-6">
        {question.varints.map((varint, index) => (
          <li key={index} onClick={() => handleChangeStep(index)} className="bg-colorBgItem text-center text-white py-5 px-10 rounded-inputRounded hover:bg-green-500 transition-colors hover:cursor-pointer hover:text-black">
            {varint}
          </li>
        ))}
      </ul>
      <h4 className="text-colorTextMuted">Вопрос {step + 1}-ый из {questions.length}</h4>
    </>
  );
}

export default Game;
