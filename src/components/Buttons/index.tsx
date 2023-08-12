import React from "react";
import ButtonView from "../ButtonView";
import styles from "./index.module.scss";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Buttons</h1>
        <ButtonView title="<Button />" />
        <ButtonView title="<Button variant=”outline” />" variant="outline" />
        <ButtonView title="<Button variant=”text” />" variant="text" />
        <ButtonView title="<Button disableShadow />" disableShadow />
        <div className={styles.inline}>
          <ButtonView title="<Button disabled />" disabled text="Disabled" />
          <ButtonView
            title="<Button variant=”text” disabled />"
            disabled
            variant="text"
            text="Disabled"
          />
        </div>
        <div className={styles.inline}>
          <ButtonView
            title="<Button startIcon=”local_grocery_store” />"
            startIcon="local_grocery_store"
          />
          <ButtonView
            title="<Button endIcon=”local_grocery_store” />"
            endIcon="local_grocery_store"
          />
        </div>
        <div className={styles.inline}>
          <ButtonView title="<Button size=”sm” />" size="sm" />
          <ButtonView title="<Button size=”md” />" size="md" />
          <ButtonView title="<Button size=”lg” />" size="lg" />
        </div>
        <div className={styles.inline}>
          <ButtonView title="<Button color=”default” />" color="default" />
          <ButtonView title="<Button color=”primary” />" color="primary" />
          <ButtonView title="<Button color=”secondary” />" color="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
