import { IPokemonListTransformer } from "./PokemonListTransformer.type";

export const usePokemonListTransformer = (data: any): IPokemonListTransformer => ({
    name: data.name,
    image: data.sprites.front_default,
})