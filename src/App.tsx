import styles from "./app.module.scss";
import Buttons from "./components/Buttons";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <SideBar />
        <Buttons />
      </div>
    </main>
  );
}

export default App;
