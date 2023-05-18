import React, { useState } from "react";
import Form from './components/Form';
import Socials from './components/Socials';
import logo from './assets/prison-mike.png';
import './App.css';

function App() {
  const [userText, setUserText] = useState('');
  const [isMute, setIsMute] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState('michael'); // New state variable for selected character
  const [botResponse, setBotResponse] = useState('Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.');
  const [season, setSeason] = useState(5);
  const [episode, setEpisode] = useState(12);

  const getResponse = async () => {
    const sanitizedUserText = userText.split(' ').join('-');

    // initiate API call
    try {
      const response = await fetch(`https://www.theofficescript.com/characters/${selectedCharacter}/ask/${sanitizedUserText}`);

      // check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const json = await response.json();
        console.log(json);
        return json; // assuming the returned JSON object has a 'line' property
      }
    } catch (error) {
      console.error('Error:', error);
      return "I'm sorry, I couldn't find a response to that.";
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userText) {
      setBotResponse('Please enter some text.');
      setSeason('0');
      setEpisode('0');
      return;
    }

    let line = await getResponse();
    let text = line.response;
    setBotResponse(text);
    setSeason(line.season);
    setEpisode(line.episode);
    checkSpeak(text);
  }

  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Header">The Office Chat Bot</h1>
        <h2 className="Sub-header">Talk to your favorite character from NBC's, "The Office"</h2>
        <Form text={userText} setText={setUserText} handleSubmit={handleSubmit} isMute={isMute} setIsMute={setIsMute} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} />
        <div className="Bot-response">
          {botResponse} (S{season} E{episode})
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default App;
