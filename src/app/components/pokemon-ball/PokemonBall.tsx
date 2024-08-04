import { memo } from "react";
import styles from "./PokemonBall.module.css";

const PokemonBallMemo = () => {
  return (
    <div className={styles["poke"]}>
      <div className={styles["button"]}></div>
    </div>
  );
};

export const PokemonBall = memo(PokemonBallMemo);
