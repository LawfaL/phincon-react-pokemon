import { PokemonServices } from "@app/services/Pokemon.service";
import { create } from "zustand";

export const usePokemonListStore = create((set) => ({
  list: [],
  loading: false,
  naming: (name: string) => set(() => ({ name })),
}));

export const usePokemonListAction = () => {
  const getListPokemon = () => {
    usePokemonListStore.setState(() => ({ list: [], loading: true }));
    PokemonServices.List("asd")
      .then((res) => res.data)
      .then((data) =>
        usePokemonListStore.setState(() => ({
          list: data.results,
          loading: false,
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
