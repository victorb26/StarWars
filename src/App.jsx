import styles from "./App.module.css";
import Menu from "./Components/Menu/Menu";
import Dashboard from "./Components/Dashboard/Dashboard";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
    <Menu/>
    </div>
    <div className={styles.dashboard}>
    <Dashboard/>
    </div>
    </div>
  );
}