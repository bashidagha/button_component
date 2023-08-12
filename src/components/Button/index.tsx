import React from "react";
import Icon from "../Icon";
import styles from "./index.module.scss";

interface IPorps {
  text?: string;
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
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
      className={`${styles.btn} ${
        variant && styles[`btn_variant_${variant}`]
      } ${disableShadow && styles[`btn_no_shadow`]} ${
        disabled && styles[`btn_disable`]
      } ${size && styles[`btn_size_${size}`]} ${
        color && styles[`btn_color_${color}`]
      } ${startIcon && styles[`btn_start_icon`]} ${
        endIcon && styles[`btn_end_icon`]
      }`}
    >
      {startIcon && (
        <span>
          <Icon name={startIcon} />
        </span>
      )}
      {text ? text : "Default"}
      {endIcon && (
        <span>
          <Icon name={endIcon} />
        </span>
      )}
    </button>
  );
};

export default Button;
