import React from "react";
import "./Meme.css"

export default function Meme() {
        return (
                <main>
                        <form className="form">
                                <input
                                        className="form--input"
                                        type="text"
                                        placeholder="Top Text"
                                />                     
                                <input
                                        type="text"
                                        placeholder="Bottom text"
                                        className="form--input"
                                />
                                <button
                                        className="form--button"
                                >
                                        Get a new meme image 🖼
                                </button>
                        </form>
                </main>
        )
}