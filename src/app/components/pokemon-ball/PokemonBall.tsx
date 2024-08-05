import { memo } from "react";
import styles from "./PokemonBall.module.css";

const PokemonBallMemo = ({ catchPokemon }: any) => {
  return (
    <div className={styles["phincon-pokeball"]} onClick={() => catchPokemon()}>
      <div className={styles["phincon-pokeball__button"]}></div>
    </div>
  );
};

export const PokemonBall = memo(PokemonBallMemo);
