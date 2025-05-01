import { Button, Container } from '@mui/material';
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";
const Home = () => {

    const { pokemons, hasMorePokemons, fetchNextPage } = usePokemons();
    return (
        <Container>
            <PokemonList pokemons = {pokemons}></PokemonList>
            {hasMorePokemons ?
                (<Button variant="contained" onClick={fetchNextPage}>Load More Pokemon</Button>) : null
            }
        </Container>
    );
};

export default Home;