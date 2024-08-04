import { memo } from "react";
import { IPokemonCard } from "./PokemonCard.type";
import styles from "./PokemonCard.module.css"

const PokemonCardMemo: React.FC<IPokemonCard> = ({ name, src, action }) => {
  return (
    <div
      className={styles["phincon-pokemon-card__wrapper"]}
      onClick={() => action()}
    >
      <img src={src} />
      <p className="use-bitfont text-xs">{name}</p>
    </div>
  );
};

export const PokemonCard = memo(PokemonCardMemo);
