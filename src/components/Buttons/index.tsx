import React from "react";
import ButtonView from "../ButtonView";
import styles from "./index.module.scss";

const Buttons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Buttons</h1>
        <ButtonView title="<Button />" />
        <ButtonView title="<Button variant=”outline” />" />
        <ButtonView title="<Button variant=”text” />" />
        <ButtonView title="<Button disableShadow />" />
        <ButtonView title="<Button disabled />" />
        <ButtonView title="<Button variant=”text” disabled />" />
      </div>
    </div>
  );
};

export default Buttons;
