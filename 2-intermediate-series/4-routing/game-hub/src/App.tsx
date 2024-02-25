import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import useGameQueryStore from "./store";

function App() {
  const { gameQuery, setGenreId } = useGameQueryStore();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genreId || 0}
            onSelectGenre={(genre) => {
              setGenreId(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={5}>
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
