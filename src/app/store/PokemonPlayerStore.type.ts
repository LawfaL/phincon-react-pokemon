import { IPokemonEntity } from "@app/_types/Pokemon.type";
import { IPokemonListTransformer } from "@app/transformer/PokemonListTransformer.type";

export interface IPokemonPlayerStore {
  list: Array<IPokemonListTransformer>;
  detail: Partial<IPokemonEntity> | null;
  error: boolean;
  loading: boolean;
}
