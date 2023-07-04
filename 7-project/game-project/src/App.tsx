import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameGrid from "./components/GameGrid";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { gameData, error, isLoading, setGames, setError } = useGames();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ChakraProvider>
        <div className={darkMode ? "root dark-mode" : "root light-mode"}>
          <NavBar onToggle={toggleDarkMode}></NavBar>
          {gameData && <GameGrid gameData={gameData}></GameGrid>}
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
