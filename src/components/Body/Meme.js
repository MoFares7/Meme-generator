import React from "react";
import "./Meme.css"
import memesData from "../Data/MemeData"

export default function Meme() {

       // const [memeImage, setMemeImage] = React.useState("");
        const [meme, setMeme] = React.useState({
                topText: "",
                bottomText: "",
                randomImage: "http://i.imgflip.com/1bij.jpg"
        })
        
        const [allMemeImages, setAllMemeImages] = React.useState(memesData)

        function getMemeImage()
        {
                const memesArray = memesData.data.memes;
                const randomNumber = Math.floor(Math.random() * memesArray.length)
                const url = memesArray[randomNumber].url
                setMeme(prevImage => ({
                        ...prevImage,
                        randomImage: url
                }))   
        }

        function handleChange(event) {
                const { name, value } = event.target
                setMeme(prevMeme => ({
                        ...prevMeme,
                        [name]: value
                }))
        }

        return (
                <main>
                        <div className="form">
                                <input
                                        className="form--input"
                                        type="text"
                                        placeholder="Top Text"
                                        name="topText"
                                        value={meme.topText}
                                        onChange={handleChange}
                                />                     
                                <input
                                        type="text"
                                        placeholder="Bottom text"
                                        className="form--input"
                                        name="bottomText"
                                        value={meme.bottomText}
                                        onChange={handleChange}
                                />
                                <button
                                        className="form--button"
                                        onClick={getMemeImage}
                                >
                                        Get a new meme image 🖼
                                </button>
                        </div>
                        <img className="meme--image" src={meme.randomImage} />
                </main>
        )
}