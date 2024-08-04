import { PokemonServices } from "@app/services/Pokemon.service";
import { usePokemonDetailTransformer } from "@app/transformer/PokemonDetail.transformer";
import { create } from "zustand";

export const usePokemonDetailStore = create((set) => ({
  loading: false,
  detail: null,
}));

export const usePokemonDetailAction = () => {
  const getPokemonDetail = (pokemonName: string) => {
    usePokemonDetailStore.setState(() => ({ loading: true, detail: null }));
    PokemonServices.Detail(pokemonName)
      .then((res) => usePokemonDetailTransformer(res.data))
      .then((data) =>
        usePokemonDetailStore.setState(() => ({ loading: false, detail: data }))
      );
  };

  return { getPokemonDetail };
};
