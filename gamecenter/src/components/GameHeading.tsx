import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g: any) => g.id === gameQuery.genreId);
  const heading = `${gameQuery.platformId || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl" marginLeft={2}>
      {" "}
      {heading}
    </Heading>
  );
};

export default GameHeading;
