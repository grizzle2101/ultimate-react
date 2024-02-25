import { Box, SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(id);
  const screenshots = data?.results;

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {screenshots?.map((screenshot) => (
          <Box key={screenshot.id} padding={5}>
            <Image src={screenshot.image} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
