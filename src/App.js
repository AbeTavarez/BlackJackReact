import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./components/MyFirstComponent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GameBoard from "./components/GameBoard/GameBoard";
import { cards } from "./data/cards";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main className="container">
        <GameBoard cards={cards} />
        <Scoreboard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
