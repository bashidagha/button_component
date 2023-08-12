import { useState } from "react";
import styles from "./app.module.scss";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import SideBar from "./components/SideBar";

function App() {
  const [currentRoot, setCurrentRoot] = useState("inputs");

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <SideBar currentRoot={currentRoot} setCurrentRoot={setCurrentRoot} />
        {currentRoot === "buttons" && <Buttons />}
        {currentRoot === "inputs" && <Inputs />}
      </div>
    </main>
  );
}

export default App;
