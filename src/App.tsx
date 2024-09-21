import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  parent_platform: Platform | null;
  sortOrder:string;
  searchText:string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
      <div>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar onSearch={(text)=>setGameQuery({...gameQuery,searchText:text})} />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                onSelectGenre={(genre: Genre) =>
                  setGameQuery({ ...gameQuery, genre: genre })
                }
                selectedGenre={gameQuery.genre}
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">  
            <GameHeading gameQuery={gameQuery}/>
            <Flex paddingLeft={2} marginBottom={5} gap={'4'}>
              <PlatformSelector
                selectedPlatform={gameQuery.parent_platform}
                onSelectPlatform={(parent_platform) =>
                  setGameQuery({ ...gameQuery, parent_platform })
                }
              />
              <SortSelector onSelectSortOrder={(sortOrder)=>{setGameQuery({...gameQuery,sortOrder})}}/>
            </Flex>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </div>

  );
};

export default App;
