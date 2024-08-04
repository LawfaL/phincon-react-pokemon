import {
  usePokemonDetailAction,
  usePokemonDetailStore,
} from "@app/store/PokemonDetail.store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const usePokemonDetailUtils = () => {
  const { name } = useParams();
  const { getPokemonDetail } = usePokemonDetailAction();

  const pokemonInfo: any = usePokemonDetailStore((state: any) => state.detail);

  useEffect(() => {
    getPokemonDetail(name as string);
  }, []);

  return { pokemonInfo };
};
