import styles from "./App.module.css";
import Menu from "../src/Components/Menu/Menu";
import Dashboard from "./Components/Dashboard/Dashboard";

export default function App() {
  return (
    <div className={styles.container}>
    <Menu/>
    <Dashboard/>
    </div>
  );
}