import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import data from './office-lines.js';
import FuzzySet from "fuzzyset.js";
import { flushSync } from "react-dom";

function App() {

  const [userText, setUserText] = useState('');
  const [lines, setLines] = useState([]);
  let michaelLine = 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.';
  const [botResponse, setBotResponse] = useState(michaelLine);

  // gets all lines from the office.
  useEffect(() => {
    const getLines = () => {
      let arr = [];
      for (let i=0; i<data.length; i++) {
        arr.push(data[i].toString());
      }
      let fz = FuzzySet(arr);
      setLines(fz);
      console.log('done');
    }
    getLines();
  }, []);
  
  // find closest matching line to user text
  // respond to user w/ next line in the show. 
  // return the next line in the show. 
  const handleSubmit = (e) => {
    e.preventDefault();
    let score = lines.get(userText);
    let best_match_line = score[0][1];
    let index = data.indexOf(best_match_line);
    let response = data[index+1];
    setBotResponse(response);
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
        {botResponse}
      </header>
    </div>
  );
}

export default App;
