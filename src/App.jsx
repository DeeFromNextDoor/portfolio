import "./App.css";
import About from "./components/about/About";
import Home from "./components/hero/Home";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import { useAppContext } from "./context/AppConetxt";

function App() {
  const { darkMode } = useAppContext();
  return (
    <div className={`app ${darkMode ? "dark_mode" : "light_mode"}`}>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
