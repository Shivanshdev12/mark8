import React, { useState } from "react";
import "./App.css";

//small DataBase
const emojiDictionary = {
  "😊": "Smilling",
  "😪": "Sleepy",
  "😢": "Crying face",
  "🤡": "Clown",
  "🤓": "Nerd face",
  "🐱‍👤": "Ninja cat",
};

function App() {
  const [meaning, setMeaning] = useState("");
  var emojiinDB = Object.keys(emojiDictionary);
  function emojiInputHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      setMeaning("we don't have this yet in our DataBase.");
    } else {
      setMeaning(meaning);
    }
  }

  function clickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div id="container">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>{meaning}</h3>
      {emojiinDB.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
