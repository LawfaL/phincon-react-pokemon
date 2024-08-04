import { memo } from "react";
import { usePokemonDetailUtils } from "./PokemonDetail.utils";
import { Button } from "@app/components/button/Button";
import { PokemonBall } from "@app/components/pokemon-ball/PokemonBall";

const PokemonDetailMemo = () => {
  const { pokemonInfo } = usePokemonDetailUtils();
  console.log(pokemonInfo?.stats);
  return (
    <section className="flex justify-center items-center">
      <div className="border border-solid rounded-xl my-xl flex flex-col items-center justify-center">
        <div className="my-xl">
          <p className="use-bitfont text-3xl">{pokemonInfo?.name}</p>
          <p className="use-bitfont">{pokemonInfo?.types}</p>
        </div>

        <img
          className="border border-solid mx-3xl m-auto"
          src={pokemonInfo?.image}
          width={200}
        />

        <div className="flex gap-xl m-xl">
          {pokemonInfo?.stats.map(
            (stat: any, index: number) =>
              index < 3 && (
                <div>
                  <p className="font-bold use-bitfont underline decoration-2">
                    {stat.name.toUpperCase()}
                  </p>
                  <p className="use-bitfont">{stat.point}</p>
                </div>
              )
          )}
        </div>

        <div>
          <p className="use-bitfont underline decoration-2">ABILITIES</p>
          <p className="text-lg font-bold">{pokemonInfo?.abilities}</p>
        </div>

        <div className="mt-xl">
          <p className="use-bitfont underline decoration-2">MOVES</p>
          <p className="max-w-[500px] mx-lg text-xs">{pokemonInfo?.moves}</p>
        </div>

        <div className="mb-xl">
          <p className="font-bold use-pokefont my-lg">Click Here to Catch!!</p>
          <PokemonBall />
        </div>

        {/* <Button label="Catch this Pokemon!" size="xl" variant="danger" onClick={() => null} /> */}
      </div>
    </section>
  );
};

export const PokemonDetailPage = memo(PokemonDetailMemo);
