import { Box, Flex } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const HomePage = () => {
  const { gameQuery, setPlatformId } = useGameQueryStore();

  console.log("game query - ", gameQuery);

  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId || 0}
              onSelectPlatform={(platform) => setPlatformId(platform)}
            />
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <GameGrid />
    </>
  );
};

export default HomePage;
