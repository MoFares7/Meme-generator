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
        

        const [allMeme, setAllMeme] = React.useState([])

        React.useEffect(() => {
                async function getMems() {
                        const respons = await fetch("https://api.imgflip.com/get_memes")
                        const data = await respons.json()
                        setAllMeme(data.data.Meme)
                }

        }, [])

        function getMemeImage() {
                const randomNumber = Math.floor(Math.random() * memesArray.length)
                const url = allMeme[randomNumber].url
                setAllMeme(prevMeme => ({
                        ...prevMeme,
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
                        <div className="form1">
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
                        <div className="meme">
                                <img className="meme--image" src={meme.randomImage} />
                                <h2 className="meme--text top">{meme.topText}</h2>
                                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                        </div>
                     
                </main>
        )
}