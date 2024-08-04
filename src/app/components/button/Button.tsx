import { memo, useMemo } from "react";
import styles from "./Button.module.css";
import { IButton } from "./Button.type";
import clsx from "clsx";

const ButtonMemo = ({ label, size, variant, disabled, className, onClick }: IButton) => {
  return (
    <button
      className={clsx(
        styles["phincon-button"],
        styles[`phincon-button__${size}`],
        styles[`phincon-button__${variant}`],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export const Button = memo(ButtonMemo);
