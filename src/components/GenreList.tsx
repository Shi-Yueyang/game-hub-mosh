import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if(isLoading) return <Spinner/>;

  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={data.image_background}
            />
            <Text fontSize={'lg'}>{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
