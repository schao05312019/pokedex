import { Button, Box, Container, Grid } from '@mui/material';

import React from 'react';
import { Link,  useParams } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';
import PokemonAvatar from './PokemonAvatar';
import PokemonBasicInfo from './PokemonBasicInfo';
import PokemonStats from './PokemonStats';

const PokemonDetail = () => {
    let {pokemonName} = useParams();

    const {pokemon, isLoading} = usePokemon({pokemonName});

    return (
        <Container>
            <Grid container flexDirection = "column" alignItems="center"
                justifyContent="center" spacing={2} mt={1}>
                    <Grid container alignItems="center" justifyContent="center" spacing={2}>
                        { isLoading ? ( <Box>Loading...</Box> ) :
                            pokemon ? (
                                    <>
                                        <Grid size={{xs : 12 , sm : 6}}>
                                            <PokemonAvatar pokemon={pokemon}/>
                                        </Grid>
                                        <Grid size={{xs : 12 , sm : 6}}>
                                            <PokemonBasicInfo pokemon={pokemon}/>
                                        </Grid>
                                        <Grid size={{xs : 12 , sm : 6}}>
                                            <PokemonStats pokemon={pokemon}/>
                                        </Grid>
                                        <Grid>
                                            <Button component = {Link} to={"/"} variant="contained">
                                                Go Back To Pokemon List
                                            </Button>
                                        </Grid>
                                    </>
                            ) : ( <Box>Pokemon Not Found</Box> )
                        }
                    </Grid>
            </Grid>
        </Container>
    )
}

export default PokemonDetail;