import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { Game, GameData } from "../services/gameService";

interface GameGridProps {
  gameData?: GameData;
  darkMode?: boolean;
}

function GameGrid({ gameData, darkMode }: GameGridProps) {
  return (
    <>
      <div className="game-grid">
        {gameData?.games.map((game: Game) => (
          <>
            <Card
              key={game.id}
              maxW="sm"
              backgroundColor={darkMode ? "black" : "white"}
            >
              <CardBody>
                <Image
                  src={game.background_image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack>
                  <Heading size="md">{game.name}</Heading>
                  <Text>{game.genres.map((g: any) => " " + g.name)}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}

export default GameGrid;
