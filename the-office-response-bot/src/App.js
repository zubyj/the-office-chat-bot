import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import data from './office-lines.js';
import FuzzySet from "fuzzyset.js";
import { flushSync } from "react-dom";

function App() {

  const [lines, setLines] = useState(data);
  const [userText, setUserText] = useState('');
  let michaelLine = 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.';
  const [botResponse, setBotResponse] = useState(michaelLine);

  const getResponse = () => {
    let randomIndex = Math.floor(Math.random() * lines.length-1);
    setBotResponse(lines[randomIndex]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getResponse();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Office Response Bot
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userLine" onChange={(e) => setUserText(e.target.value)}/>
          <button type="submit">
            Submit
          </button>
        </form>
        <p>{botResponse}</p>
      </header>
    </div>
  );
}

export default App;
