import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameGrid from "./components/GameGrid";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { games, error, isLoading, setGames, setError } = useGames();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ChakraProvider>
        <div className={darkMode ? "root dark-mode" : "root light-mode"}>
          <NavBar onToggle={toggleDarkMode}></NavBar>
          <ul className="list-group">
            {games.map((game) => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
          <GameGrid></GameGrid>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
