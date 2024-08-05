export interface IPokemonEntity {
    id: number | string;
    name: string;
    image: string;
    type: string;
    moves: string;
    abilities: string;
    hp: number | string;
    att: number | string;
    def: number | string;
    str: number | string;
    spd: number | string;
    crit: number | string;
    renameCounter: number | string;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }
  