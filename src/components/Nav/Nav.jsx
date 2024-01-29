import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <div className="grid grid-cols-autoColumns max-w-250 mx-auto">
          {[
            ["TIC TAC TOE", "/tic tac toe"],
            ["COUNTER", "/counter"],
            ["MODAL WINDOW", "/tic tac toe"],
            ["TODO LIST", "/tic tac toe"],
            ["QUIZ", "/tic tac toe"],
            ["LIST OF USERS", "/tic tac toe"],
            ["STOP WATCH", "/tic tac toe"],
            ["NOTICE", "/tic tac toe"],
            ["ETEH A SKETCH", "/tic tac toe"],
            ["PASSWORD GENERATOR", "/tic tac toe"],
            ["CALCULATOR", "/tic tac toe"],
            ["ROCK PAPER SCISSORS", "/tic tac toe"],
            ["TIME APP", "/tic tac toe"],
            ["CONVERTER CURRENCY", "/tic tac toe"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="bg-green-500 p-4 text-center border-2 border-green-600 transition-colors hover:bg-green-700"
            >
              {title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;
