import trashIcon from "./../trashIcon.svg";

import "./../components/RenderTask.css";

function RenderTask({ title, id, removeTodo, statusTodo }) {
  const deleteTask = () => {
    removeTodo(id);
  };

  const handleStatusChange = () => {
    statusTodo(id); // Передача id выбранного todo в функцию statusTodo
  };

  return (
    <div className="flex items-center gap-x-3 p-4 rounded-inputRounded border border-colorBorderItem bg-colorBgItem">
      <input
        type="checkbox"
        className="list_item_checkbox"
        onClick={handleStatusChange}
      />
      <h3 className="list_item_title mr-auto text-colorText">{title}</h3>
      <button onClick={deleteTask}>
        <img src={trashIcon} alt="delete task" />
      </button>
    </div>
  );
}

export default RenderTask;
