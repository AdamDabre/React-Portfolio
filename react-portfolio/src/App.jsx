import styles from "./App.Module.css";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className={styles.App}>
            <Navbar></Navbar>
        </div>
    );
}

export default App;
