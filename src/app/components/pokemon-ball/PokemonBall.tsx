import { memo } from "react";
import styles from "./PokemonBall.module.css";

const PokemonBallMemo = () => {
  return (
    <div className={styles["phincon-pokeball"]}>
      <div className={styles["phincon-pokeball__button"]}></div>
    </div>
  );
};

export const PokemonBall = memo(PokemonBallMemo);
