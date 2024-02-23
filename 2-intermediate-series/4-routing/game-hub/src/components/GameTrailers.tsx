import { Spinner } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number;
}

const GameTrailers = ({ id }: Props) => {
  const { data, isLoading, error } = useGameTrailers(id);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailers;
