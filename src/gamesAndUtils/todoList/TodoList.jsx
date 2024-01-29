import { useState, useEffect } from "react";
import plus from "./plus.svg";
import RenderTask from "./components/RenderTask";
import Cover from "./components/Cover";

function TodoList() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeInput = (e) => {
    setInputVal(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), title: inputVal, status: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem(`id_${newTodo.id}`, JSON.stringify(newTodo));
    setInputVal("");
  };

  useEffect(() => {
    const uploadTodos = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      uploadTodos.push(JSON.parse(localStorage[key]));
    }
    setTodos(uploadTodos);
  }, []);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.removeItem(`id_${id}`);
  };

  const statusTodo = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item) => {
        if (item.id === todoId) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      localStorage.setItem(
        `id_${todoId}`,
        JSON.stringify(updatedTodos.find((item) => item.id === todoId))
      );
      return updatedTodos;
    });
  };

  return (
    <>
      <div className="max-w-800px mx-auto mt-10">
        <form className="flex items-center justify-between gap-x-2 mb-3">
          <input
            type="text"
            placeholder="My tasks"
            className="rounded-inputRounded border border-colorBorderItem bg-colorBgItem p-4 max-w-638px w-full text-white"
            onChange={handleChangeInput}
            value={inputVal}
          />
          <button
            className="flex items-center justify-center text-white gap-x-2 bg-colorAccent rounded-inputRounded p-4 w-100px hover:bg-colorAccentHover transition-colors"
            onClick={addTodo}
          >
            Add <img src={plus} alt="add task" />
          </button>
        </form>
        <div className="flex items-center justify-between mt-20 mb-6">
          <div className="counters__wrapper_all">
            <p>
              Total tasks <span>{todos.length}</span>
            </p>
          </div>
          <div className="counters__wrapper_solved">
            <p>
              Solved tasks <span>{todos.length != 0 ? `${todos.filter((todo) => todo.status === true).length} of ${todos.length}` : 0}</span>
            </p>
          </div>
        </div>
        {todos.length === 0 ? <Cover /> : null}
        <div className="flex flex-col gap-y-4">
          {todos.map((todo) => (
            <RenderTask
              key={todo.id}
              title={todo.title}
              id={todo.id}
              status={todo.status}
              removeTodo={removeTodo}
              statusTodo={statusTodo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
