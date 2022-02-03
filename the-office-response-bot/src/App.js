import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  // the line displayed to user when they hit enter. 
  const [userText, setUserText] = useState('');
  // the bots state is updated with user text. 
  let michaelLine = 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.';
  const [botResponse, setBotResponse] = useState(michaelLine);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBotResponse(userText); 
    console.log('hello world');
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
