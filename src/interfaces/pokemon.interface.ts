export interface IndexedPokemon {
    name: string
    url: string
}

export interface PokemonListResponse {
    count: number
    next: string | null
    previous: string | null
    results: IndexedPokemon[]
}

export interface ListPokemon {
    name: string
    url: string
    image: string
    pokedexNumber: number
}

export interface PokemonAbility {
    ability: {
        name: string
        url: string
    }
    isHidden: boolean
    slot: number
}

export interface PokemonType {
    slot: number
    type: {
        name: string
        url: string
    }
}

export interface PokemonStats {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

export interface DetailPokemon {
    name: string
    id: number
    weight: number
    height: number
    abilities: PokemonAbility[]
    types: PokemonType[]
    stats: PokemonStats[]
    color: string | null
    //cries: string
    //other artwork?
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        };
    };
}