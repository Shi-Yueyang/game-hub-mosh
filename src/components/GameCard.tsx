import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card  >
      <Image src={game.background_image} />
      <CardBody>
        <PlatformIconList platforms={game.parent_platforms.map(uglyPlatform=>uglyPlatform.platform)}></PlatformIconList>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
