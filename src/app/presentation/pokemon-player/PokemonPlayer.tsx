import { memo } from "react";
import { usePokemonPlayerUtils } from "./PokemonPlayer.utils";
import { PokemonCard } from "@app/components/pokemon-card/PokemonCard";
import styles from "./PokemonPlayer.module.css";
import { IPokemonEntity } from "@app/_types/Pokemon.type";

const PokemonPlayer = () => {
  const { pokemonList, getPokemonDetail } = usePokemonPlayerUtils();

  return (
    <section className={styles["phincon-pokemon-list__main-content"]}>
      <div className={styles["phincon-pokemon-list__wrapper"]}>
        {pokemonList.map((q: IPokemonEntity, index: number) => (
          <div>
            <PokemonCard
              key={`poke-card-${index}`}
              name={q.name}
              src={q.image}
              action={() => getPokemonDetail(q)}
            />
            <div className="flex gap-md text-xs justify-center my-sm">
              <div key={`poke-stats-${index}`}>
                <p className="font-bold use-bitfont underline decoration-2">
                  HP
                </p>
                <p className="use-bitfont">{q.hp}</p>
              </div>
              <div key={`poke-stats-${index}`}>
                <p className="font-bold use-bitfont underline decoration-2">
                  ATT
                </p>
                <p className="use-bitfont">{q.att}</p>
              </div>
              <div key={`poke-stats-${index}`}>
                <p className="font-bold use-bitfont underline decoration-2">
                  DEF
                </p>
                <p className="use-bitfont">{q.def}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const PokemonPlayerPage = memo(PokemonPlayer);
