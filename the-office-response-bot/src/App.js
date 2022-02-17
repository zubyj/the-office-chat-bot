import React, { useEffect, useState, useRef } from "react";
import data from './office-lines.js';
import FuzzySet from "fuzzyset.js";
import './App.css';

// UI Components
import Header from './Header';
import Form from './Form';
import NextLineBtn from "./NextLineBtn";

// Material UI imports
import MicOnIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Button from '@mui/material/Button';

function App() {

  const [lines, setLines] = useState([]);
  const [userText, setUserText] = useState('');
  const [botResponse, setBotResponse] = useState('Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.');
  const [mute, setMute] = useState(true);

  const loadLines = () => {
    let arr = []
    for (let i=0; i<data.length; i++) {
      arr.push(data[i].toString());
    }
    setLines(FuzzySet(arr));
  }

  // When page loads, load the lines. 
  useEffect(() => {
    loadLines()
  }, []);

  const findBestResponse = () => {
    let scores = lines.get(userText);
    let best_score = scores[0][1];
    let index = data.indexOf(best_score);
    let response = data[index+1];
    setBotResponse(response);
  }

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



  // Returns random line. 
  const getRandomLine = (e) => {
      let max = parseInt((data.length-1));
      let randomIndex = Math.floor(Math.random() * max); 
      setUserText(data[randomIndex]);
  }

  const handleFormChange = (e) => {
    setUserText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title='The Office Response Bot' />
        <Form text={userText} setText={setUserText} handleSubmit={handleSubmit} />
        <div>
          <NextLineBtn data={data} botResponse={botResponse} setUserText={setUserText} />
          <Button variant='outlined' onClick={getRandomLine}>
            Get random line
          </Button>
          <Button onClick={() => setMute(!mute)}>
            {!mute ? <MicOnIcon/> : <MicOffIcon/>}
          </Button>
        </div>
        
        <div className="Response">
          {botResponse}
        </div>
      </header>
    </div>
  );
}

export default App;
