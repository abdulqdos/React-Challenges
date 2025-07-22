import { useState } from "react";

export default function MyForm() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      score: prevPlayer.score + 1,
    }));
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col justify-center items-center p-6">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black font-sans">
        <label className="block mb-4 font-semibold">
          Score: <b>{player.score}</b>{" "}
          <button
            onClick={handlePlusClick}
            className="ml-2 px-3 py-1 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            +1
          </button>
        </label>

        <label className="block mb-4 font-semibold">
          First name:
          <input
            value={player.firstName}
            onChange={handleFirstNameChange}
            className="mt-1 block w-full rounded border border-gray-300 p-2 text-black"
            type="text"
          />
        </label>

        <label className="block font-semibold">
          Last name:
          <input
            value={player.lastName}
            onChange={handleLastNameChange}
            className="mt-1 block w-full rounded border border-gray-300 p-2 text-black"
            type="text"
          />
        </label>
      </div>
    </div>
  );
}
