import closeIcon from "./../closeMenu.svg";

function CorrectAnswers({ questions, history }) {
  return (
    <div
      className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-x-1/ bg-slate-700 rounded-inputRounded 
    "
    >
      <ul className="p-5">
        {questions.map((question) => (
          <li key={question.title}>
            Correct answer: {question.varints[question.correct]} <br />
            Your answes: {question.varints[history[1]]}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CorrectAnswers;
