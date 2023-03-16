import React from "react";

import headericon from "../assets/header-icon.svg";
import SignUp from "../SignUp/SignUp";
import "./Header.css"
import H from "./h"
import App from "../../App";
import MyButton from "./h";
import { Route, Routes, Router } from "react-router-dom";


export default function () {

        return (
                <div className="main--nav">

                        <nav>
                                <img className="img--nav" src={headericon} />
                                <h2 className="title--nav"><span>Meme Generator</span></h2>
                                <div className="option--nav">
                                        <a href="components/Header/components/Header/components/Header/h">Home</a>
                                        <a href="https://github.com/MoFares7" >github</a>

                                        <div className="dropdown">
                                                <button className="dropbtn">More
                                                        <i className="fa fa-caret-down"></i>
                                                </button>
                                                <div className="dropdown-content">
                                                        <a href="#">Settings</a>
                                                        <a href="#">Log out</a>

                                                </div>
                                        </div>
                                </div>

                        </nav>

                </div>
        )
}
