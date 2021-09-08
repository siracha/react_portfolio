import Sidebar from "./components/sidebar/Sidebar"
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact"
import Projects from "./components/projects/Projects"
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
