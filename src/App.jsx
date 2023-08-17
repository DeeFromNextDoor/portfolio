import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
