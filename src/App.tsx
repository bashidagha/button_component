import styles from "./app.module.scss";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <SideBar />
      </div>
    </main>
  );
}

export default App;
