import React, { useEffect, useState, useRef } from "react";
import data from '../office-lines.js';
import FuzzySet from "fuzzyset.js";
import './../App.css';

// UI Components
import Header from './Header';
import Form from './Form';
import NextLineBtn from './NextLineBtn';
import RandomLineBtn from './RandomLineBtn';
import ToggleMicBtn from './ ToggleMicBtn';

function App() {

  const [lines, setLines] = useState([]);
  const [userText, setUserText] = useState('');
  const [botResponse, setBotResponse] = useState('Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.');
  const [isMute, setIsMute] = useState(true);

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


  // main algorithm. 

  // finds closest matching line to user text.
  // replies with the follwing line in the show. 
  const findBestResponse = () => {
    let scores = lines.get(userText);
    let best_score = scores[0][1];
    let best_index = data.indexOf(best_score);
    let response = data[best_index + 1];
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
    if (!isMute) {
      window.speechSynthesis.cancel();
      speakResponse();
    }
  }

  return (
    <div className="App">
      <div className="App-body">
        <Header title='The Office Response Bot' />
        <Form text={userText} setText={setUserText} handleSubmit={handleSubmit} />
        <div className="Button-group">
          <NextLineBtn data={data} botResponse={botResponse} setUserText={setUserText} />
          <RandomLineBtn data={data} setUserText={setUserText} />
          <ToggleMicBtn isMute={isMute} setIsMute={setIsMute}/>
        </div>
        <div className="Bot-response">
          {botResponse}
        </div>
      </div>
    </div>
  );
}

export default App;
