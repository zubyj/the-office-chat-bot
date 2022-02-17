import React from 'react';

function BotResponse() {


    // find closest matching line to user text
    // respond to user w/ next line in the show. 
    const findBestResponse = () => {
        let scores = lines.get(userText);
        let best_score = scores[0][1];
        let index = data.indexOf(best_score);
        let response = data[index+1];
        setBotResponse(response);
  }

    return (
        <div className="Response">
        {botResponse}
      </div>
    )
}