import { IPokemonEntity } from "@app/_types/Pokemon.type";

export interface IPlayerServiceList {
  data: Array<IPokemonEntity>;
  message: string;
}

export type TPlayerServicePost = Pick<
  IPokemonEntity,
  "name" | "image" | "hp" | "att" | "def"
>;

export type TPlayerServicePut = Pick<
  IPokemonEntity,
  "name" | "id" | "renameCount"
>;
