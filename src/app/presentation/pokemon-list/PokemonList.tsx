import { memo, useCallback, useRef } from "react";
import { usePokemonListUtils } from "./PokemonList.utils";
import styles from "./PokemonList.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@app/components/button/Button";
import { PokemonCard } from "@app/components/pokemon-card/PokemonCard";

const PokemonListMemo = () => {
  const navigate = useNavigate();
  const { pokemonList, canLoad, offset, nextHandler } = usePokemonListUtils();

  return (
    <>
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
            disabled={offset == '0'}
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
    </>
  );
};

export const PokemonListPage = memo(PokemonListMemo);
