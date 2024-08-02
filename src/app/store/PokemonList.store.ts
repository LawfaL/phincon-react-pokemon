import { PokemonServices } from "@app/services/Pokemon.service";
import { create } from "zustand";

export const usePokemonListStore = create((set) => ({
  bears: 0,
  name: "",
  list: [],
  loading: false,
  increase: () => set((state: any) => ({ bears: state.bears + 1 })),
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

  const increasePokemonAction = () =>
    usePokemonListStore.setState((state: any) => ({
      bears: state.bears + 1,
    }));

  const renamePokemonAction = (name: string) =>
    usePokemonListStore.setState(() => ({ name }));

  return {
    getListPokemon,
    increasePokemonAction,
    renamePokemonAction,
  };
};
