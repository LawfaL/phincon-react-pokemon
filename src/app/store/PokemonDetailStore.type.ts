import { PokemonDetailTransformer } from "@app/transformer/PokemonDetailTransformer.type";

export interface IPokemonDetailStore {
    data: PokemonDetailTransformer | null
    error: any
    loading: boolean
}