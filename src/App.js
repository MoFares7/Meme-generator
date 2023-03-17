import './App.css';
import Meme from './components/Body/Meme';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import { Route, Routes, Router, BrowserRouter, Link } from "react-router-dom";
import { useState } from 'react';
//  <Meme />
function App() {

  const [darkMode, setDarkMode] = useState(true)
  function toDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header darkMode={darkMode}
          toDarkMode={toDarkMode}
        />

        <Routes>
          <Route path="/" element={<Meme />} />
          <Route path="/about" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
