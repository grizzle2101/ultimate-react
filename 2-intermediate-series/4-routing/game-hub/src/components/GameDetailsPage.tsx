import { Grid, GridItem, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import CriticScore from "./CriticScore";
import DetailSection from "./DetailSection";
import ExpandableText from "./ExpandableText";
import GameTrailers from "./GameTrailers";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug || "");

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Stack>
        <Heading>{data?.name}</Heading>
        <ExpandableText>{data?.description_raw}</ExpandableText>
        <Grid templateColumns="repeat(2, 2fr)" gap={6}>
          <GridItem w="100%">
            <DetailSection heading="Platforms">
              {data.parent_platforms.map((x) => (
                <h2 key={x.platform.id}>{x.platform.name}</h2>
              ))}
            </DetailSection>
          </GridItem>
          <GridItem w="100%">
            <DetailSection heading="Metascore">
              <CriticScore score={data.metacritic} />
            </DetailSection>
          </GridItem>
          <GridItem w="100%">
            <DetailSection heading="Genres">
              {data.genres.map((x) => (
                <h2 key={x.name}>{x.name}</h2>
              ))}
            </DetailSection>
          </GridItem>
          <GridItem w="100%">
            <DetailSection heading="Publishers">
              {data.publishers.map((x) => (
                <h2 key={x.name}>{x.name}</h2>
              ))}
            </DetailSection>
          </GridItem>
        </Grid>
      </Stack>
      <GameTrailers id={data.id} />
    </>
  );
};

export default GameDetailsPage;
