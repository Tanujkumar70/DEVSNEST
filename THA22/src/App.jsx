import { useState, useEffect } from "react";
import Temp from "./components/Temp";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  const [temp, setTemp] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.data.memes);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Meme Generator</h1>
      {meme === null ? (
        <Temp temp={temp} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
