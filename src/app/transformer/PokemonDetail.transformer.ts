import { PokemonDetailTransformer } from "./PokemonDetailTransformer.type";

export const usePokemonDetailTransformer = (data: any): PokemonDetailTransformer => {
  return {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    species: data.species.name,
    types: data.types.map((q: any) => q.type.name).join(", "),
    stats: data.stats.map((q: any) => ({
      name: q.stat.name,
      point: q.base_stat,
    })),
    abilities: data.abilities.map((q: any) => q.ability.name).join(', '),
    moves: data.moves.map((q: any) => q.move.name).join(', '),
  };
};
