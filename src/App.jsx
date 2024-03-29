import Nav from "./components/Nav/Nav";
import TodoList from "./gamesAndUtils/todoList/todoList";
import Counter from "./gamesAndUtils/counter/Counter";
import Modal from "./gamesAndUtils/modal/Modal";
import TicTacToe from "./gamesAndUtils/tic tac toe/TicTacToe";
import Quiz from "./gamesAndUtils/quiz/Quiz";
import ListOfUsers from "./gamesAndUtils/listOfUsers/ListOfUsers";

import "./App.css";
function App() {
  return (
    <>
      <Nav />

      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Modal /> */}
      {/* <TicTacToe /> */}
      {/* <Quiz /> */}
      <ListOfUsers />
    </>
  );
}

export default App;
