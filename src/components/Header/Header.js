import React from "react";
import headericon from "../assets/header-icon.svg";
import "./Header.css"

export default function () {

        return (
                <div className="main--nav">
                        <nav>
                                <img className="img--nav" src={headericon} />
                                <h2 className="title--nav"><span>Meme Generator</span></h2>
                                <div className="option--nav">
                                        
                                        <a href="#home">Home</a>
                                        <a href="#news">News</a>
                                        <div class="dropdown">
                                                <button class="dropbtn">More
                                                        <i class="fa fa-caret-down"></i>
                                                </button>
                                                <div class="dropdown-content">
                                                        <a href="#">Settings</a>
                                                        <a href="#">Log out</a>

                                                </div>
                                        </div>
                                </div>
                               
                        </nav>
                </div>
        )
}