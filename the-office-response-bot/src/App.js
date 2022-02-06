import React, { useEffect, useState, useRef } from "react";
import logo from './prison-mike.png';
import MicOnIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import './App.css';
import data from './office-lines.js';
import FuzzySet from "fuzzyset.js";
import { flushSync } from "react-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MicOff from "@mui/icons-material/MicOff";

function App() {

  const [userText, setUserText] = useState('');
  let michaelLine = 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.';
  const [botResponse, setBotResponse] = useState(michaelLine);
  const [mute, setMute] = useState(true);
  const [lines, setLines] = useState([]);
  
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
  const handleSubmit = (e) => {

    e.preventDefault();
    let scores = lines.get(userText);
    let best_score = scores[0][1];
    let index = data.indexOf(best_score);
    let response = data[index+1];
    setBotResponse(response);

    if (!mute) {
      let message = new SpeechSynthesisUtterance();
      message.text = response;
      window.speechSynthesis.speak(message);
    }
  }

  // Return the next line in the show after bot's line
  const generateUserText = (e) => {

    let index = data.indexOf(botResponse);  
    let response = data[index+1].toString();

    // Corner case
    // If user text already set to the next line, return random line
    if (response === userText) {
      let max = parseInt((data.length-1));
      let randomIndex = Math.floor(Math.random() * max); 
      console.log('random index ' + randomIndex);
      setUserText(data[randomIndex]);
      return;
    }

    setUserText(data[index+1]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">The Office Response Bot</h1>
        <form onSubmit={handleSubmit} style={{width: "50%"}}>
          {/* Input Field */}
          <TextField 
            id="standard-basic"
            variant="standard"
            label="Type something, maybe a line from the show?"
            value={userText}
            maxRows={4}
            onChange={(e) => setUserText(e.target.value)}
            style={{backgroundColor: "white", width: "100%"}}
          />
          {/* Submit Button */}
          <div className="Submit-btn">
            <Button variant='contained' type='submit'>Submit</Button>
          </div>
          {/* Other buttons */}
          <div className="Preferences">
          <Button variant='contained' onClick={generateUserText}>
             Get next line 
          </Button>
          <Button onClick={() => setMute(!mute)}>
            {!mute ? <MicOnIcon/> : <MicOffIcon/>}
          </Button>
          </div>

        </form>
        <div className="Response">
          {botResponse}
        </div>
      </header>
    </div>
  );
}

export default App;
