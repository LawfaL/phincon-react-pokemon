import { memo } from "react";
import { usePokemonPlayerUtils } from "./PokemonPlayer.utils";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "@app/components/pokemon-card/PokemonCard";
import styles from "./PokemonPlayer.module.css";
import { Button } from "@app/components/button/Button";

const PokemonPlayer = () => {
  const navigate = useNavigate();
  const { nextHandler, pokemonList, offset, canLoad } = usePokemonPlayerUtils();

  return (
    <section className={styles["phincon-pokemon-list__main-content"]}>
      <div className={styles["phincon-pokemon-list__wrapper"]}>
        {pokemonList.map((q: any, index: number) => (
          <PokemonCard
            key={`poke-card-${index}`}
            name={q.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              Number(offset) + index + 1
            }.png`}
            action={() => navigate(`/detail/${q.name}`)}
          />
        ))}
      </div>
      <footer className="my-lg">
        <Button
          className="font-bold"
          label="Back"
          size="sm"
          variant="primary"
          onClick={() => nextHandler("back")}
          disabled={offset == "0"}
        />
        <Button
          className="font-bold"
          label="Next"
          size="sm"
          variant="primary"
          onClick={() => nextHandler("next")}
          disabled={!canLoad}
        />
      </footer>
    </section>
  );
};

export const PokemonPlayerPage = memo(PokemonPlayer);
