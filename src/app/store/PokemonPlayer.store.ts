import { PokemonServices } from "@app/services/Pokemon.service";
import { create } from "zustand";

export const usePokemonListStore = create((set) => ({
  list: [],
  loading: false,
  error: false,
  hasMore: false,
  naming: (name: string) => set(() => ({ name })),
}));

export const usePokemonListAction = () => {
  const getListPokemon = (offset: number) => {
    usePokemonListStore.setState(() => ({ list: [], loading: true, error: false }));
    PokemonServices.List(offset)
      .then((res) => res.data)
      .then((data) =>
        usePokemonListStore.setState((state: any) => ({
          list: data.results,
          loading: false,
          hasMore: data.next != null,
          error: false
        }))
      );
  };

  const renamePokemonAction = (name: string) =>
    usePokemonListStore.setState(() => ({ name }));

  return {
    getListPokemon,
    renamePokemonAction,
  };
};
