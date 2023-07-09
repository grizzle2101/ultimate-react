import { List, ListItem } from "@chakra-ui/react";
import { GenreData } from "../services/genreService";

interface GameFilterProps {
  genreData: GenreData;
}

function GameFilter(genreDataProps: GameFilterProps) {
  return (
    <>
      <div>
        <List spacing={2}>
          {genreDataProps.genreData?.results.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default GameFilter;
