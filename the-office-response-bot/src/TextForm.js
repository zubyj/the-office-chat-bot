import React from 'react';
import TextField from '@mui/material/TextField';

function TextForm({userText, setUserText}) {
     return (
        <TextField 
        id="standard-basic"
        className="Text-form"
        variant="standard"
        label="Type something, maybe a line from the show?"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        />
     )
}

export default TextForm;