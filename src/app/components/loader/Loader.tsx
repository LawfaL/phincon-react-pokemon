import { memo } from "react";
import styles from "./Loader.module.css"

const LoaderMemo = () => {
  return (
    <div className={styles["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
  );
};

export const Loader = memo(LoaderMemo)