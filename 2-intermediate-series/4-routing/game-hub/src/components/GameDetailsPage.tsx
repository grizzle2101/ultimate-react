import { Heading, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug || "");

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Stack>
        <Heading>{data?.name}</Heading>
        <ExpandableText> {data.description_raw}</ExpandableText>
      </Stack>
    </>
  );
};

export default GameDetailsPage;
