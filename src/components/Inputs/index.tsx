import InputView from "../InputView";
import styles from "./index.module.scss";

const Inputs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Inputs</h1>
        <div className={styles.row}>
          <InputView title="<Input />" />
          <InputView title="<Input error />" error/>
        </div>

        <div className={styles.copyright}>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/bashidagha">bashidagha</a>{" "}
          - devChallenges.io
        </div>
      </div>
    </div>
  );
};

export default Inputs;
