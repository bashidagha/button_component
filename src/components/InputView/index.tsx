import Input from "../Input";
import styles from "./index.module.scss";

interface IPorps {
  placeholder?: string;
  error?: boolean;
  title: string;
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

const InputView = (props: IPorps) => {
  return (
    <div className={styles.container}>
      <p>{props.title}</p>
      <Input {...props} />
    </div>
  );
};

export default InputView;
