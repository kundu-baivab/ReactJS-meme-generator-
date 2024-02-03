import React, { useRef } from 'react';

const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: "rgba(0,0,0,0)",
  removeContainer: true,
};

const prepareURL = async (cardElement) => {
  if (!cardElement) return;

  try {
    const html2canvas = await import("html2canvas");
    const result = await html2canvas.default(cardElement, options);
    const asURL = result.toDataURL("image/jpeg");

    const anchor = document.createElement("a");
    anchor.href = asURL;
    anchor.download = "meme.jpeg";
    anchor.click();
    anchor.remove();
  } catch (reason) {
    console.log(reason);
  }
};

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    img: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function getmemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      img: url,
    }));
  }

  const cardRef = useRef(null);

  return (
    <div className="c1">
      <div className="form">
        <input
          onChange={handleChange}
          className="i1"
          type="text"
          name="topText"
          placeholder="Top Text"
          value={meme.topText}
        />
        <input
          onChange={handleChange}
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={meme.bottomText}
        />
      </div>
      <div className="btn">
        <button onClick={getmemeImg}>Get a new meme image 🖼</button>
      </div>
      <div className="meme" ref={cardRef}>
        <div className="image">
          <img src={meme.img} alt="" className="edit" />
        </div>
        <h2 className="memetext top">{meme.topText}</h2>
        <h2 className="memetext bottom">{meme.bottomText}</h2>
      </div>
      <div className="btn">
        <button onClick={() => prepareURL(cardRef.current)}>Download</button>
      </div>
    </div>
  );
}
