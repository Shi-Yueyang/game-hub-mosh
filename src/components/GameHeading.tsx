import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.parent_platform?.name || ''} ${gameQuery.genre?.name || ''} Game`;
  return <Heading as={"h1"} margin={5}>{heading}</Heading>;
};

export default GameHeading;
