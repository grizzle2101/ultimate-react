import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GameFilter({ handleSelection }) {
  const { genreData } = useGenres();

  return (
    <>
      <div>
        <List spacing={2}>
          {genreData?.results.map((genre) => (
            <ListItem key={genre.id} onClick={() => handleSelection(genre.id)}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={genre.image_background}
                />
                <Text>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default GameFilter;
