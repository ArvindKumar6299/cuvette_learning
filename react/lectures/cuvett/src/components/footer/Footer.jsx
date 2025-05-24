import React from "react";
import "./Footer.css"

const Footer = ()=>{


    return(
        <div className="formContainer">
        <h2 style={{font:"xl", color:"blue"}}>Contact Us</h2>
        <form className="formarea">
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Enter Your Email" required />
            <textarea name="message" placeholder="your message" required  rows="5" id=""></textarea>
            <button type="submit">Send Message</button>
        </form>
        </div>
    )
}

export default Footer;