import "./App.css";
import Movie from "./components/movies";

function App() {
  return (
    <main className="container">
      <h1 className="text-center bg-info container-fluid pb-3">App</h1>
      <Movie />
    </main>
  );
}

export default App;
