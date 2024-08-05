import {
  usePokemonPlayerAction,
  usePokemonPlayerStore,
} from "@app/store/PokemonPlayer.store";
import { useEffect } from "react";

export const usePokemonPlayerUtils = () => {
  const { getListPokemon, getPokemonDetail } = usePokemonPlayerAction();

  const pokemonList: any = usePokemonPlayerStore((state) => state.list);
  const loadingState: any = usePokemonPlayerStore((state) => state.loading);

  useEffect(() => {
    getListPokemon();
  }, []);

  return {
    pokemonList,
    loadingState,
    getListPokemon,
    getPokemonDetail,
  };
};
