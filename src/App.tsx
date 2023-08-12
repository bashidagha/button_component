import { useState } from "react";
import styles from "./app.module.scss";
import Buttons from "./components/Buttons";
import SideBar from "./components/SideBar";

function App() {
  const [currentRoot, setCurrentRoot] = useState("buttons");

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <SideBar currentRoot={currentRoot} setCurrentRoot={setCurrentRoot}/>
        <Buttons />
      </div>
    </main>
  );
}

export default App;
