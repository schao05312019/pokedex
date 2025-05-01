import { Card, CardContent, Grid, Typography } from "@mui/material";
import { DetailPokemon } from "../interfaces/pokemon.interface";

interface PokemonBasicInfoProps {
  pokemon: DetailPokemon
}

//here's where you can also add the cry information

const PokemonBasicInfo = ({pokemon}: PokemonBasicInfoProps) => {
    return (
        <Card>
            <CardContent>
                <Grid container sx={{textTransform: "capitalize"}} justifyContent="center" textAlign="center"
                spacing={2}>
                    <Grid size={{xs : 6}}>
                        <Typography variant="subtitle2">Height</Typography>
                        <Typography variant="body2">{pokemon.height}</Typography>
                    </Grid>
                    <Grid size={{xs : 6}}>
                        <Typography variant="subtitle2">Weight</Typography>
                        <Typography variant="body2">{pokemon.weight}</Typography>
                    </Grid>
                    <Grid size={{xs : 6}}>
                        <Typography variant="subtitle2">Types</Typography>
                        <Typography variant="body2">{pokemon.types.map((type) => {
                            return (
                                <Typography variant="body2">
                                    {type.type.name}
                                </Typography>
                                )
                            })}
                        </Typography>
                    </Grid>
                    <Grid size={{xs : 6}}>
                        <Typography variant="subtitle2">Abilities</Typography>
                        <Typography variant="body2">{pokemon.abilities.map((ability) => {
                            return (
                                <Typography variant="body2">
                                    {ability.ability.name}
                                </Typography>
                                )
                            })}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PokemonBasicInfo;