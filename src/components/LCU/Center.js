import React from "react";
import "./center.css";
import Set from "../LCU/official.webp"

function Sponser() {
    return(
        <>
         <img  id="partner" src={Set} alt="ssss"/>
         <div id="oops">
         <h3>Download official Dream 11 App</h3>
         <input  type={Number} placeholder="Enter mobile number"/>
         <button id="all">GET APP LINK</button>
         </div>
         <div id="sel">
            <div id="left">
                <h1>150 +cr</h1>
                     <h1>users worldwide</h1>
                
            </div>
            <div id="right">
                <h1>1000+ </h1>
                <p>contests</p>
            </div>
         </div>
        </>
    )
    
}export default Sponser