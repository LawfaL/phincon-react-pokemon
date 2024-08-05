import { memo } from "react";
import { usePokemonDetailUtils } from "./PokemonDetail.utils";
import { PokemonBall } from "@app/components/pokemon-ball/PokemonBall";

const PokemonDetailMemo = () => {
  const { pokemonInfo, catchPokemonHandler } = usePokemonDetailUtils();
  return (
    <section className="flex justify-center items-center">
      <div className="border border-solid rounded-xl my-xl flex flex-col items-center justify-center shadow-lg">
        <div className="my-xl">
          <p className="use-bitfont text-3xl">{pokemonInfo?.name}</p>
          <p className="use-bitfont text-sm">{pokemonInfo?.types}</p>
        </div>

        <img
          className="mx-3xl m-auto w-1/2"
          src={pokemonInfo?.image}
        />

        <div className="flex gap-xl m-xl">
          {pokemonInfo?.stats.map(
            (stat: any, index: number) =>
              index < 3 && (
                <div key={`poke-stats-${index}`}>
                  <p className="font-bold use-bitfont underline decoration-2 text-sm">
                    {stat.name.toUpperCase()}
                  </p>
                  <p className="use-bitfont text-sm">{stat.point}</p>
                </div>
              )
          )}
        </div>

        <div className="text-sm">
          <p className="use-bitfont underline decoration-2">ABILITIES</p>
          <p className="text-lg font-bold">{pokemonInfo?.abilities}</p>
        </div>

        <div className="mt-xl">
          <p className="use-bitfont underline decoration-2 text-sm">MOVES</p>
          <p className="max-w-[500px] mx-lg text-xs">{pokemonInfo?.moves}</p>
        </div>

        <div className="mb-xl">
          <p className="font-bold use-pokefont my-lg text-sm">Click Here to Catch!!</p>
          <PokemonBall catchPokemon={catchPokemonHandler}/>
        </div>

        {/* <Button label="Catch this Pokemon!" size="xl" variant="danger" onClick={() => null} /> */}
      </div>
    </section>
  );
};

export const PokemonDetailPage = memo(PokemonDetailMemo);
