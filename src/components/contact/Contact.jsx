import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="email contact" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP;)</span>}
        </form>
      </div>
    </div>
  )
}
