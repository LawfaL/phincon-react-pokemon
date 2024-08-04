import {
  usePokemonListAction,
  usePokemonListStore,
} from "@app/store/PokemonList.store";
import { QueryString } from "@app/utils/queryUtils";
import { useCallback, useEffect } from "react";

export const usePokemonListUtils = () => {
  const { offset } = QueryString();
  const { getListPokemon } = usePokemonListAction();

  const getPokemon: any = usePokemonListStore((state: any) => state.list);

  useEffect(() => {
    getListPokemon();
  }, [offset]);

  return { getPokemon };
};
