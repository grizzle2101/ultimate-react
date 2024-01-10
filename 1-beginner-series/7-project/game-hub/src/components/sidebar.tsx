import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  selectedItem: number;
  onSelection: (id: number) => void;
}

function Sidebar({ selectedItem, onSelection }: Props) {
  const { genreData } = useGenres();

  return (
    <>
      <div>
        <List spacing={2}>
          {genreData?.results.map((genre) => (
            <ListItem
              className={genre.id === selectedItem ? "selected-item" : ""}
              key={genre.id}
              onClick={() => onSelection(genre.id)}
            >
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

export default Sidebar;
