import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props{
  onSelectGenre:(genre:Genre)=>void;
  selectedGenre: Genre|null;
}

const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
  const { data, error, isLoading } = useGenres();

  if(error) return null;
  if(isLoading) return <Spinner/>;
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data?.map((d) => (
        <ListItem key={d.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              objectFit={'cover'}
              src={d.image_background}
            />
            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={d.id === selectedGenre?.id?'bold':'normal'} onClick={()=>{onSelectGenre(d)}} fontSize={'lg'} variant={'link'}>{d.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>

  );
};

export default GenreList;
