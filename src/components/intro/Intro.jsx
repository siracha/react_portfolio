import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Engineer","Programmer"],
    });
  }, []);
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets\headshot.png" alt="man in suit" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jade Thomas</h1>
          <h3>Software <span ref={textRef}></span></h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="arrow pointing to projects section" />
        </a>
      </div>
    </div>
  )
}
