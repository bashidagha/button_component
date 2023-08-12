import React from "react";
import styles from "./index.module.scss";

interface IPorps {
  text?: string;
  variant?: string;
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: string;
  color?: string;
}

const Button = ({
  text,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}: IPorps) => {
  return (
    <button
      className={`${styles.btn} ${variant && styles[`btn_${variant}`]} ${
        size && styles[`btn_${size}`]
      } ${color && styles[`btn_${color}`]}`}
    >
      {text ? text : "Default"}
    </button>
  );
};

export default Button;
