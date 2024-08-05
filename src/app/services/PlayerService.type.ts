import { IPokemonEntity } from "@app/_types/Pokemon.type";

export interface IPlayerServiceList {
  data: Array<IPokemonEntity>;
  message: string;
}

export type TPlayerServicePost = Omit<
  IPokemonEntity,
  "id" | "deletedAt" | "createdAt" | "updatedAt" | "renameCounter"
>;

export type TPlayerServicePut = Pick<IPokemonEntity, "name" | "id" | "renameCounter">;
