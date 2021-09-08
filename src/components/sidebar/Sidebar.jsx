import "./sidebar.scss"
import {LinkedIn,Mail} from "@material-ui/icons"

export default function Sidebar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">jtom.</a>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span><a href="www.linkedin.com/in/jade-0-thomas">jade-0-thomas</a></span>
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          <span >jade729@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
