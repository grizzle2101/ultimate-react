import { useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "./components/navigation-bar";
import Sidebar from "./components/sidebar";
import GameGrid from "./components/game-grid";
import useGames from "./hooks/useGames";
import { GameData, Genre } from "./services/gameService";

interface GameQuery {
  genre: number;
  searchText: string;
}
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    searchText: "",
    genre: 3,
  } as GameQuery);

  const { gameData } = useGames();

  const filterGameData = (): GameData => {
    let filteredByGenre =
      gameData?.games.filter((game) =>
        game.genres.find((x) => x.id === gameQuery.genre)
      ) || [];

    let filteredByText =
      filteredByGenre?.filter((g) => g.name.includes(gameQuery.searchText)) ||
      [];

    let count = filteredByText?.length || 0;

    return { count: count, games: filteredByText };
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ChakraProvider>
      <div className={darkMode ? "root dark-mode" : "root light-mode"}>
        <NavigationBar
          onChange={(text) => {
            setGameQuery({ ...gameQuery, searchText: text });
          }}
          onToggle={toggleMode}
          darkMode={darkMode}
        />
        <div className="main-content">
          <Sidebar
            selectedItem={gameQuery.genre}
            onSelection={(id) => {
              setGameQuery({ ...gameQuery, genre: id });
            }}
          />
          <GameGrid gameData={filterGameData()} darkMode={darkMode} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
