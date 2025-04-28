import { Grid } from '@mui/material';
import { IndexedPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
    pokemons: IndexedPokemon[];
}

const PokemonList = ({pokemons} : PokemonListProps) => {
    return (
        <Grid container spacing={2}>
            {pokemons.length > 0 ? pokemons.map((p) => {
                return (
                    <Grid size ={4}>
                        <PokemonCard key = {p.name} pokemon = {p} />
                   </Grid>
                );
            }) : null}
        </Grid>
    );
};

export default PokemonList;


//https://pokeapi.co/
//https://pokeapi.co/api/v2