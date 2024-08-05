import {
  usePokemonDetailAction,
  usePokemonDetailStore,
} from "@app/store/PokemonDetail.store";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

export const usePokemonDetailUtils = () => {
  const { name } = useParams();
  const { getPokemonDetail, catchPokemonAction } = usePokemonDetailAction();

  const pokemonInfo: any = usePokemonDetailStore((state: any) => state.detail);

  const catchPokemonHandler = useCallback(
    () => catchPokemonAction(pokemonInfo),
    [pokemonInfo]
  );

  useEffect(() => {
    getPokemonDetail(name as string);
  }, []);

  return { pokemonInfo, catchPokemonHandler };
};
