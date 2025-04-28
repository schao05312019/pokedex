import { useEffect, useState } from 'react';
import { httpClient } from '../api/httpClient';
import { POKEMON_API_POKEMON_URL } from '../constants';
import { IndexedPokemon, PokemonListResponse } from "../interfaces/pokemon.interface";


const usePokemons = () => {
    const [pokemons, setPokemons] = useState<IndexedPokemon[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null >(POKEMON_API_POKEMON_URL);

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
            if (nextUrl) {
                const result = await httpClient.get<PokemonListResponse>(nextUrl);
                console.log(result);
                if (result?.data?.results) {
                    setPokemons(result.data.results);
                }
            }
        }

    return {
            pokemons
        }

}

export default usePokemons;