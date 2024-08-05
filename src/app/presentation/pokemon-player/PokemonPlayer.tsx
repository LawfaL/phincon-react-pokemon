import { memo } from "react";
import { usePokemonPlayerUtils } from "./PokemonPlayer.utils";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "@app/components/pokemon-card/PokemonCard";
import styles from "./PokemonPlayer.module.css";
import { IPokemonEntity } from "@app/_types/Pokemon.type";

const PokemonPlayer = () => {
  const navigate = useNavigate();
  const { pokemonList, getPokemonDetail } = usePokemonPlayerUtils();

  return (
    <section className={styles["phincon-pokemon-list__main-content"]}>
      <div className={styles["phincon-pokemon-list__wrapper"]}>
        {pokemonList.map((q: IPokemonEntity, index: number) => (
          <PokemonCard
            key={`poke-card-${index}`}
            name={q.name}
            src={q.image}
            action={() => getPokemonDetail(q)}
          />
        ))}
      </div>
    </section>
  );
};

export const PokemonPlayerPage = memo(PokemonPlayer);
