import React from "react";
import styles from "./index.module.scss";

const sidebarLinks = ["colors", "typography", "spaces", "buttons", "grid"];

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span>Dev</span>
          <span>challenges.io</span>
        </div>
        <ul>
          {sidebarLinks.map((link: string) => {
            return <li>{link}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
