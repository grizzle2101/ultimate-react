import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { GameData } from "../services/gameService";

interface GameGridProps {
  gameData: GameData;
}

function GameGrid(gameDataProps: GameGridProps) {
  return (
    <>
      <Card maxW="sm">
        {gameDataProps.gameData.games.map((game) => (
          <>
            <CardBody>
              <Image
                src={game.background_image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{game.name}</Heading>
                <Text>{game.genres.map((g) => " " + g.name)}</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
          </>
        ))}
      </Card>
    </>
  );
}

export default GameGrid;

/*
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      

            <ul className="list-group">
        {gameDataProps.gameData.games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
*/
