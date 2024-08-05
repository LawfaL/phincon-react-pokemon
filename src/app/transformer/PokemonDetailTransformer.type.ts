export interface PokemonDetailTransformer {
  name: string;
  image: string;
  species: string;
  types: string;
  stats: Array<{
    name: string;
    point: string | number;
  }>;
  abilities: string;
  moves: string;
}
