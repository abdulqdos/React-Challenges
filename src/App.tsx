import "./App.css";
import "./index.css";
import { useState } from "react";

function App() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  function handleClick() {
    setPending(pending + 1);
    delay(3000);
  }

  function delay(ms = 3000) {
    setTimeout(() => {
      setPending((prev) => {
        return prev - 1;
      });
      setCompleted((prev) => {
        return prev + 1;
      });
    }, ms);
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 bg-gray-600 mt-8">
        <h3>Pending: {pending}</h3>
        <h3>Completed: {completed}</h3>
        <button onClick={handleClick}>Buy</button>
      </div>
    </>
  );
}

export default App;
