import React, { useEffect, useState } from "react";

import FuzzySet from "fuzzyset.js";

import Form from './components/Form.js';
import NextLineBtn from './components/NextLineBtn.js';
import RandomLineBtn from './components/RandomLineBtn.js';
import ToggleMicBtn from './components/ ToggleMicBtn.js';

import logo from './assets/prison-mike.png';
import data from './office-lines.js';
import './App.css';

function App() {

  const [lines, setLines] = useState([]);
  const [userText, setUserText] = useState('');
  const [botResponse, setBotResponse] = useState('Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.');
  const [isMute, setIsMute] = useState(true);

  // Loads every line from 'The Office'
  const loadLines = () => {
    setLines(FuzzySet(data.map(item => item.toString())))
  }

  useEffect(() => {
    loadLines()
  }, []);

  // finds closest matching line to user text.
  // reply with following line in the show. 
  const getResponse = () => {
    let scores = lines.get(userText);
    if (!scores) return "I'm sorry, I didn't get that.";
    let best_score = scores[0][1];
    let best_index = data.indexOf(best_score);
    let response = data[best_index + 1];
    return response;
  }

  // If mute button off, play text to speech. 
  const checkSpeak = (response) => {
    window.speechSynthesis.cancel();
    let message = new SpeechSynthesisUtterance();
    message.text = response;
    if (!isMute) {
      window.speechSynthesis.speak(message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let response = getResponse();
    setBotResponse(response);
    checkSpeak(response);
  }

  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Title">The Office Response Bot</h1>
        <Form text={userText} setText={setUserText} handleSubmit={handleSubmit} />

        <div className="Bot-response">
          {botResponse}
        </div>
        <div className="Button-group">
          <NextLineBtn data={data} botResponse={botResponse} setUserText={setUserText} />
          <RandomLineBtn data={data} setUserText={setUserText} />
          <ToggleMicBtn isMute={isMute} setIsMute={setIsMute} />
        </div>
      </div>
    </div>
  );
}

export default App;
