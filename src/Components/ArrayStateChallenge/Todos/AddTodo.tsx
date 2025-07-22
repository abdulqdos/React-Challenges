import { useState } from 'react';

export default function AddTodo({ onAddTodo = () => {} }) {
  const [title, setTitle] = useState("");
  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 py-2 border border-gray-300 placeholder:text-white text-white rounded w-full text-sm"
      />
      <button
        onClick={() => {
            onAddTodo(title);
            setTitle("");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
}
