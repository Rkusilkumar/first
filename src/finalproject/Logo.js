import React from "react";
import { fiHome } from 'react-icons/fi';
import './logo.css'
function Logo() {
    return(
        <>
        <div className="html">
        <a href="#"className="logo"><i className="fas-fa-untensils"></i>resto. </a>


        <nav className="navbar">
        <a className="active" href="Home">< fiHome/> Home</a>
        <a href="Home">DISHES</a>
        <a href="Home">ABOUT</a>
        <a href="Home">MENU</a>
        <a href="Home">REVIEW</a>
        <a href="Home">ORDER</a>
        </nav>
        <div className="icons">
            <i className="fas-fa-bars" id="bars"></i>
            <i className="fas-fa-Search" id="search-icon"></i>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart"></a>
        </div>
        </div>
        
        </>
    )
    
}
export default Logo