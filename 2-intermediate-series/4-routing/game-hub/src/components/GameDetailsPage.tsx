import { Box, Heading, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import CriticScore from "./CriticScore";
import DetailSection from "./DetailSection";
import ExpandableText from "./ExpandableText";
import GameTrailers from "./GameTrailers";
import GameScreenshots from "./GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug || "");

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box>
          <Stack padding={5}>
            <Heading>{data?.name}</Heading>
            <ExpandableText>{data?.description_raw}</ExpandableText>
            <SimpleGrid columns={2}>
              <DetailSection heading="Platforms">
                {data.parent_platforms.map((x) => (
                  <h2 key={x.platform.id}>{x.platform.name}</h2>
                ))}
              </DetailSection>

              <DetailSection heading="Metascore">
                <CriticScore score={data.metacritic} />
              </DetailSection>

              <DetailSection heading="Genres">
                {data.genres.map((x) => (
                  <h2 key={x.name}>{x.name}</h2>
                ))}
              </DetailSection>

              <DetailSection heading="Publishers">
                {data.publishers.map((x) => (
                  <h2 key={x.name}>{x.name}</h2>
                ))}
              </DetailSection>
            </SimpleGrid>
          </Stack>
        </Box>

        <Box>
          <GameTrailers id={data.id} />
          <GameScreenshots id={data.id} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
