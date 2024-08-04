import {
  usePokemonListAction,
  usePokemonListStore,
} from "@app/store/PokemonList.store";
import { QueryString } from "@app/utils/queryUtils";
import { useCallback, useEffect, useState } from "react";

export const usePokemonPlayerUtils = () => {
  const { offset, set } = QueryString();
  const { getListPokemon } = usePokemonListAction();

  const pokemonList: any = usePokemonListStore((state: any) => state.list);
  const loadingState: any = usePokemonListStore((state: any) => state.loading);
  const canLoad: any = usePokemonListStore((state: any) => state.hasMore);

  const nextHandler = useCallback(
    (type: any) => {
      if (type == "back") set("offset", `${Number(offset) - 10}`);
      else set("offset", `${Number(offset) + 10}`);
    },
    [offset]
  );

  useEffect(() => {
    getListPokemon(Number(offset));
  }, [offset]);

  return {
    pokemonList,
    loadingState,
    canLoad,
    offset,
    nextHandler,
    getListPokemon,
  };
};
