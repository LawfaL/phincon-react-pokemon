import { PokemonServices } from "@app/services/Pokemon.service";
import { create } from "zustand";
import { IPokemonListStore } from "./PokemonListStore.type";

export const usePokemonListStore = create<IPokemonListStore>(() => ({
  list: [],
  loading: false,
  error: false,
  hasMore: false,
}));

export const usePokemonListAction = () => {
  const getListPokemon = (offset: number) => {
    usePokemonListStore.setState(() => ({
      list: [],
      loading: true,
      error: false,
    }));

    PokemonServices.List(offset)
      .then((res) => res.data)
      .then((data) =>
        usePokemonListStore.setState(() => ({
          list: data.results,
          loading: false,
          hasMore: data.next != null,
          error: false,
        }))
      );
  };

  return {
    getListPokemon,
  };
};
