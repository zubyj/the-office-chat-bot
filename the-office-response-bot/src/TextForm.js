import React from 'react';
import TextField from '@mui/material/TextField';

function TextForm({userText, setUserText}) {
     return (
        <TextField 
        id="standard-basic"
        variant="standard"
        label="Type something, maybe a line from the show?"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        style={{backgroundColor: "white", width: "100%"}}
        />
     )
}

export default TextForm;