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

function App() {

  const [userText, setUserText] = useState('');
  const [botResponse, setBotResponse] = useState('Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.');
  const [mute, setMute] = useState(true);
  const [lines, setLines] = useState([]);

  // gets all lines from the office.
  const loadLines = () => {
    let arr = []
    for (let i=0; i<data.length; i++) {
      arr.push(data[i].toString());
    }
    setLines(FuzzySet(arr));
  }
  
  useEffect(() => {
    loadLines()
  }, []);

  // find closest matching line to user text
  // respond to user w/ next line in the show. 
  const findBestResponse = () => {
    let scores = lines.get(userText);
    let best_score = scores[0][1];
    let index = data.indexOf(best_score);
    let response = data[index+1];
    setBotResponse(response);
  }

  // Play text to speech bot response
  const speakResponse = () => {
    let message = new SpeechSynthesisUtterance();
    message.text = botResponse;
    window.speechSynthesis.speak(message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findBestResponse();
    if (!mute) {
      speakResponse();
    }
  }

  // Returns a random line in the show
  const getRandomLine = (e) => {
      let max = parseInt((data.length-1));
      let randomIndex = Math.floor(Math.random() * max); 
      setUserText(data[randomIndex]);
  }

  // Return the next line in the show after bot's line
  const getNextLine = (e) => {
    let index = data.indexOf(botResponse);  
    let response = data[index+1].toString();
    setUserText(response);
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
            onChange={(e) => setUserText(e.target.value)}
            style={{backgroundColor: "white", width: "100%"}}
          />
          {/* Submit Button */}
          <div className="Submit-btn">
            <Button variant='contained' type='submit'>Submit</Button>
          </div>
          {/* Other buttons */}
          <div className="Preferences">
            <Button variant='outlined' onClick={getNextLine}>
              Get next line
            </Button>
            <Button variant='outlined' onClick={getRandomLine}>
              Get random line
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
