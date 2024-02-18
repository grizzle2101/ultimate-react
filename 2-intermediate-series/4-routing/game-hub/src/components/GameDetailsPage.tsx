import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug || "");

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Stack>
        <Heading>{data?.name}</Heading>
        <Text width={1000}>{data?.description_raw}</Text>
      </Stack>
    </>
  );
};

export default GameDetailsPage;
