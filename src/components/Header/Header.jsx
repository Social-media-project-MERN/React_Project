import React from "react";
import "./Header.css"
import ReactDom from "react-dom";

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerwidth  h-container">
            <img scr ="./logo.png " alt = " logo" width = {100}/>

            <div className="h-menu flexCenter" ></div>
                <a href=""> Residencies</a>
                <a href="">Our Value</a>
                <a href=""> Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">
                     <a href="">Contact</a>
                </button>
            
            

            </div>
        </section>
    )
}

export default Header;