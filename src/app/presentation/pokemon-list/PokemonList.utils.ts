import { PokemonServices } from "@app/services/Pokemon.service";
import {
  usePokemonListAction,
  usePokemonListStore,
} from "@app/store/PokemonList.store";
import { useCallback, useEffect } from "react";

export const usePokemonListUtils = () => {
  const { increasePokemonAction, getListPokemon, renamePokemonAction } = usePokemonListAction();

  const getPokemon: any = usePokemonListStore((state: any) => state.list);
  const getName: any = usePokemonListStore((state: any) => state.name);

  const increaseHandler = useCallback(() => getListPokemon(), []);
  const renameHandler = useCallback((name: any) => renamePokemonAction(name), []);

  return { getPokemon, increaseHandler, renameHandler, getName };
};
