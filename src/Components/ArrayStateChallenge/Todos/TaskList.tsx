import { useState } from "react";

export default function TaskList({
  todos = [],
  onChangeTodo = () => {},
  onDeleteTodo = () => {},
}) {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo} 
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({
  todo = { id: "", title: "", done: false }, 
  onChange = () => {}, 
  onDelete = () => {},
}) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <div className="flex items-center gap-2">
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
          className="px-2 py-1 border border-gray-300 rounded w-full text-sm"
        />
        <button
          onClick={() => setIsEditing(false)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
        >
          Save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div className="flex items-center gap-2 justify-between">
        <span
          className={`text-sm ${
            todo.done ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.title}
        </span>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between bg-white shadow p-3 rounded border">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) =>
            onChange({
              ...todo,
              done: e.target.checked,
            })
          }
          className="w-4 h-4"
        />
        {todoContent}
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition ml-4"
      >
        Delete
      </button>
    </div>
  );
}
