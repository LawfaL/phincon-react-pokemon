import { IPokemonListTransformer } from "@app/transformer/PokemonListTransformer.type";

export interface IPokemonListStore {
    list: Array<IPokemonListTransformer>
    error: boolean
    hasMore: boolean
    loading: boolean
}