import React from "react";
import './logins.css'
import selva from "../swiggy.js/coco.jpg";


function Logins() {
  return (
    <>
    <img id="img" src={selva} alt="ss"></img>
    <div className="hero">
        <div className="log">
            <input type="numbers" placeholder="Phone Number" id="name" maxLength="10"></input> <br></br>
            <input type="text" placeholder="Name" id="name"></input><br></br>
            <input type="email" placeholder="Email Address" id="name"></input><br></br>

            <a id="code" href="#">Have a referal code  ? </a><br></br>
            <input  type="submit" value="Continue" id="submit"></input><br></br>
            <small>By clicking on Login, I accept the Terms & Conditions &
              <br></br> <b>Privacy Policy</b></small>

        </div>


      
    </div>
    </>
  )
}

export default Logins

