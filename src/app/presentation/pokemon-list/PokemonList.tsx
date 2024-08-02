import { memo } from "react";
import { usePokemonListUtils } from "./PokemonList.utils";

const PokemonListMemo = () => {
  const { getPokemon, getName, renameHandler, increaseHandler } =
    usePokemonListUtils();
  return (
    <>
      <h1 className="use-pokefont text-xl">Pokemon</h1>
      <p className="use-bitfont mt-lg">Gotta Catch 'Em All</p>
      {getName}

      {getPokemon.map((q: any, index: number) => (
        <p key={`poke-ent-${index}`} className="use-bitfont mt-lg">{q.name}</p>
      ))}

      <button onClick={() => increaseHandler()}>Increase Pokemon</button>
      <input
        type="text"
        onChange={(e) => renameHandler(e.target.value)}
        name="asd"
      />
    </>
  );
};

export const PokemonListPage = memo(PokemonListMemo);
