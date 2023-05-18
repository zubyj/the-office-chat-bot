import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ToggleMicBtn from './ ToggleMicBtn'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Form({ text, setText, handleSubmit, isMute, setIsMute, selectedCharacter, setSelectedCharacter }) {
   return (
      <form onSubmit={handleSubmit}>
         {/* Character Selector */}
         <Select
            id="character-select"
            color="primary"
            value={selectedCharacter}
            onChange={(e) => setSelectedCharacter(e.target.value)}
            variant="standard"
            sx={{ color: 'white', fontSize: '22px', marginRight: '30px' }}
         >
            <MenuItem value="michael">Michael Scott</MenuItem>
            <MenuItem value="dwight">Dwight Schrute</MenuItem>
            <MenuItem value="andy">Andy Bernard</MenuItem>
            <MenuItem value="pam">Pam Beesly</MenuItem>
            <MenuItem value="jim">Jim Halpert</MenuItem>
         </Select>
         {/* User Input Field */}
         <TextField
            id="standard-basic"
            className="Form"
            variant="standard"
            label="Type something, maybe a line from the show?"
            InputLabelProps={{
               sx: { paddingLeft: '20px' }, // Add padding to the left of the label
            }}
            inputProps={{
               sx: { marginLeft: '20px' },
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         {/* Submit Button */}
         <div>
            <Button
               variant='contained'
               type='submit'
               color="success"
               className="Submit-btn"
               startIcon={<PlayArrowIcon />}
            >Submit</Button>
            <ToggleMicBtn isMute={isMute} setIsMute={setIsMute} />
         </div>
      </form >
   )
}

export default Form;
