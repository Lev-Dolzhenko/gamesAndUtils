import Nav from "./components/Nav/Nav";
import TodoList from "./gamesAndUtils/todoList/todoList";
import Counter from './gamesAndUtils/counter/Counter'

import "./App.css";
import Modal from "./gamesAndUtils/modal/Modal";
function App() {
  return (
    <>
      <Nav />

      {/* <Counter /> */}
      {/* <TodoList /> */}
      <Modal />
    </>
  );
}

export default App;
