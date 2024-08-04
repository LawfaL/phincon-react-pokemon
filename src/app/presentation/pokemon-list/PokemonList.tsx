import { memo } from "react";
import { usePokemonListUtils } from "./PokemonList.utils";
import styles from "./PokemonList.module.css";
import { useNavigate } from "react-router-dom";

const PokemonListMemo = () => {
  const navigate = useNavigate()
  const { getPokemon } = usePokemonListUtils();
  return (
    <>
      <section className={styles["phincon-pokemon-list__main-content"]}>
        <div className={styles["phincon-pokemon-list__wrapper"]}>
          {getPokemon.map((q: any, index: number) => (
            <div className={styles["phincon-pokemon-card__wrapper"]} onClick={() => navigate(`/detail/${q.name}`)}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
              />
              <p key={`poke-ent-${index}`} className="use-bitfont text-xs">
                {q.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export const PokemonListPage = memo(PokemonListMemo);
