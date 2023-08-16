import "./App.css";
import Home from "./components/hero/Home";
import Navbar from "./components/nav/Navbar";
import { useAppContext } from "./context/AppConetxt";

function App() {
  const { darkMode } = useAppContext();
  return (
    <div className={`app ${darkMode ? "dark_mode" : "light_mode"}`}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
