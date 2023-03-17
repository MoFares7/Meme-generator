import { useState } from "react";
import headericon from "../../assets/header-icon.svg";
import SignUp from "../SignUp/SignUp";
import "./Header.css"
import { Route, Routes, Router, BrowserRouter, Link } from "react-router-dom";
import Meme from "../Body/Meme";


export default function Header(props) {

        return (
                <div className={props.darkMode ? "main--nav" : "main--nav--dark"}>
                      

                                <nav>

                                        <img className="img--nav" src={headericon} />
                                        <h2 className="title--nav"><span>Meme Generator</span></h2>
                                        <div className="option--nav">
                                                <Link to="/">Home</Link>
                                                <Link to="/OurProducts">Our Products</Link>
                                                <Link to="/about">Sign up</Link>

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
