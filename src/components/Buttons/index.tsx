import React from "react";
import ButtonView from "../ButtonView";
import styles from "./index.module.scss";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Buttons</h1>
        <div className={styles.row}>
          <ButtonView title="<Button />" />
        </div>
        <div className={styles.row}>
          <ButtonView title="<Button variant=”outline” />" variant="outline" />
        </div>
        <div className={styles.row}>
          <ButtonView title="<Button variant=”text” />" variant="text" />
        </div>
        <div className={styles.row}>
          <ButtonView title="<Button disableShadow />" disableShadow />
        </div>
        <div className={styles.row}>
          <ButtonView title="<Button disabled />" disabled text="Disabled" />
          <ButtonView
            title="<Button variant=”text” disabled />"
            disabled
            variant="text"
            text="Disabled"
          />
        </div>
        <div className={styles.row}>
          <ButtonView
            title="<Button startIcon=”local_grocery_store” />"
            startIcon="local_grocery_store"
          />
          <ButtonView
            title="<Button endIcon=”local_grocery_store” />"
            endIcon="local_grocery_store"
          />
        </div>
        <div className={styles.row}>
          <ButtonView title="<Button size=”sm” />" size="sm" />
          <ButtonView title="<Button size=”md” />" size="md" />
          <ButtonView title="<Button size=”lg” />" size="lg" />
        </div>
        <div className={styles.row}>
          <ButtonView title="<Button color=”default” />" color="default" />
          <ButtonView title="<Button color=”primary” />" color="primary" />
          <ButtonView title="<Button color=”secondary” />" color="secondary" />
        </div>
        <div className={styles.copyright}>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/bashidagha">bashidagha</a> -
          devChallenges.io
        </div>
      </div>
    </div>
  );
};

export default Buttons;
