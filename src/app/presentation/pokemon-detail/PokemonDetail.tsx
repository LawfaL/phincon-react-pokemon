import { memo } from "react";
import { usePokemonDetailUtils } from "./PokemonDetail.utils";
import { PokemonBall } from "@app/components/pokemon-ball/PokemonBall";
import { Loader } from "@app/components/loader/Loader";
import styles from "./PokemonDetail.module.css";

const PokemonDetailMemo = () => {
  const { pokemonInfo, catchPokemonHandler } = usePokemonDetailUtils();
  return (
    <section className={styles["phincon-pokemon-detail__main"]}>
      <div className={styles["phincon-pokemon-detail__card"]}>
        {!pokemonInfo ? (
          <div className="p-3xl my-3xl">
            <Loader />
          </div>
        ) : (
          <>
            <div className="my-xl">
              <p className="use-bitfont text-3xl">{pokemonInfo?.name}</p>
              <p className="use-bitfont text-sm">{pokemonInfo?.types}</p>
            </div>

            <img className="mx-3xl m-auto w-1/2" src={pokemonInfo?.image} />

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
              <p className="use-bitfont underline decoration-2 text-sm">
                MOVES
              </p>
              <p className="max-w-[500px] mx-lg text-xs">
                {pokemonInfo?.moves}
              </p>
            </div>

            <div className="mb-xl">
              <p className="font-bold use-pokefont my-lg text-sm">
                Click Here to Catch!!
              </p>
              <PokemonBall catchPokemon={catchPokemonHandler} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export const PokemonDetailPage = memo(PokemonDetailMemo);
