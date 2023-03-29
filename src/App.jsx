import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Navbar from "./components/UI/Navbar";
import Image from "./components/Image/Image";
import MemesData from "./components/Image/MemesData";

function App() {
  const [memeId, setMemeId] = useState(null);

  const newMemeHandler = (e) => {
    e.preventDefault();
    let memeNumber = Math.trunc(Math.random() * 100);
    console.log(MemesData.data.memes[memeNumber].url);
    const newMemeId = MemesData.data.memes[memeNumber].url;
    setMemeId(newMemeId);
  };

  return (
    <div className="container">
      <Navbar />
      <Form newMemeHandler={newMemeHandler} />
      {memeId && <Image index={memeId} className="meme--img" />}
    </div>
  );
}

export default App;
