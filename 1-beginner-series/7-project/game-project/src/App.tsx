import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameGrid from "./components/GameGrid";
import GameFilter from "./components/GameFilter";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const { gameData } = useGames();

  const selectGenre = (id: number) => {
    setSelectedGenre(id);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ChakraProvider>
        <div className={darkMode ? "root dark-mode" : "root light-mode"}>
          <NavBar onToggle={toggleDarkMode}></NavBar>
          <div className="main-content">
            <GameFilter handleSelection={selectGenre}></GameFilter>
            {gameData && <GameGrid gameData={gameData}></GameGrid>}
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
