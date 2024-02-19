import { Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import GenreList from "./GenreList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { useState } from "react";
import { GameQuery } from "../App";

const HomePage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default HomePage;
