import { useId } from "react";
import Icon from "../Icon";
import styles from "./index.module.scss";

interface IPorps {
  placeholder?: string;
  error?: boolean;
  multiline?: boolean;
  fullWidth?: boolean;
  row?: number;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  size?: string;
  helperText?: string;
  label?: string;
}

const Input = ({
  placeholder,
  error,
  multiline,
  fullWidth,
  row,
  disabled,
  startIcon,
  endIcon,
  value,
  size,
  label,
  helperText,
}: IPorps) => {
  const messageId = useId();

  return (
    <div
      className={`${styles.container} ${error && styles[`input_error`]} ${
        fullWidth && styles[`input_fullWidth`]
      } ${disabled && styles[`input_disable`]} ${
        size && styles[`input_size_${size}`]
      } ${helperText && styles[`input_helperText`]} ${
        startIcon && styles[`input_start_icon`]
      } ${endIcon && styles[`input_end_icon`]}`}
    >
      <label htmlFor={messageId}>{label ? label : "Label"}</label>
      <div className={styles.input}>
        {startIcon && (
          <span>
            <Icon name={startIcon} />
          </span>
        )}

        {multiline ? (
          <textarea value={value} rows={row ? row : 4} />
        ) : (
          <input
            value={value}
            id={messageId}
            placeholder={placeholder ? placeholder : "Placeholder "}
          />
        )}
        {endIcon && (
          <span>
            <Icon name={endIcon} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
