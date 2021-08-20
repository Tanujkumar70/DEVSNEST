import { saveAs } from "file-saver";
import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [caption, setCap] = useState({
    template_id: meme.id,
    username: "hitBY_fortune",
    password: "@987654321",
    boxes: []
  });

  const sendurl = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${caption.template_id}&username=${caption.username}&password=${caption.password}`;
    caption.boxes.map((i, index) => {
      url += `&boxes[${index}][text]=${i.text}`;
      console.log(url);
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.data !== undefined) {
          setMeme({ ...meme, url: data.data.url });
        } else {
          alert("fill all the fields👻");
        }
      });
  };

  const down = () => {
    saveAs(meme.url, "image.jpg"); // Put your image url here.
  };

  return (
    <div className="mem">
      <img src={meme.url}></img>
      <br />
      {[...Array(meme.box_count)].map((_, index) => (
        <input
          type="text"
          placeholder={`Meme caption ${index}`}
          onChange={(e) => {
            const newCaption = caption.boxes;
            newCaption[index] = { text: e.target.value };
            setCap({ ...caption, boxes: newCaption });
            console.log(caption.boxes);
          }}
        />
      ))}
      <div>
        <button onClick={sendurl}>Generate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Chosse Template
        </button>
        <button onClick={down}>Download</button>
      </div>
    </div>
  );
};
export default Meme;
