import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import useGenres from "./hooks/useGenres";
import GameGrid from "./components/GameGrid";
import GameFilter from "./components/GameFilter";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { gameData } = useGames();
  const { genreData } = useGenres();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ChakraProvider>
        <div className={darkMode ? "root dark-mode" : "root light-mode"}>
          <NavBar onToggle={toggleDarkMode}></NavBar>
          <div className="main-content">
            {genreData && <GameFilter genreData={genreData}></GameFilter>}
            {gameData && <GameGrid gameData={gameData}></GameGrid>}
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
