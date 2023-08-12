import { useState } from "react";
import InputView from "../InputView";
import styles from "./index.module.scss";

const Inputs = () => {
  const [testText, setTestText] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Inputs</h1>
        <div className={styles.row}>
          <InputView title="<Input />" />
        </div>
        <div className={styles.row}>
          <InputView title="<Input error />" error />
        </div>
        <div className={styles.row}>
          <InputView title="<Input disabled />" disabled />
        </div>
        <div className={styles.row}>
          <InputView
            title="<Input helperText=”Some interesting text” />"
            helperText="Some interesting text"
          />
          <InputView
            title="<Input helperText=”Some interesting text” error />"
            error
            helperText="Some interesting text"
          />
        </div>
        <div className={styles.row}>
          <InputView title="<Input startIcon />" startIcon="telephone" />
          <InputView title="<Input endIcon />" endIcon="lock" />
        </div>
        <div className={styles.row}>
          <InputView
            title="<Input value=”text” />"
            value="text"
            input={testText}
            setInput={setTestText}
          />
        </div>
        <div className={styles.row}>
          <InputView title="<Input size=”sm” />" size="sm" />
          <InputView title="<Input size=”md” />" size="md" />
        </div>
        <div className={styles.row} style={{ display: "block" }}>
          <InputView title="<Input fullWidth />" value="text" fullWidth />
        </div>
        <div className={styles.row}>
          <InputView title="<Input multiline row=”4” />" multiline row={4} />
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
