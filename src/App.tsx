import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import MyForm from "./Components/MyForm";

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
        <MainContent />
      </div> */}

      <div className="flex flex-col bg-gray-600 items-center text-start justify-center min-h-screen text-white p-4">
        <MyForm />
      </div>
    </>
  );
}

export default App;
