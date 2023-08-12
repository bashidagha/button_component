import Button from "../Button";
import styles from "./index.module.scss";

interface IPorps {
  text?: string;
  title: string;
  variant?: string;
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: string;
  color?: string;
}

const ButtonView = (props: IPorps) => {
  return (
    <div className={styles.container}>
      <p>{props.title}</p>
      <Button {...props} />
    </div>
  );
};

export default ButtonView;
