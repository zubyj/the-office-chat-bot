import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleMicBtn from './ ToggleMicBtn';

function Form({ text, setText, handleSubmit, isMute, setIsMute }) {

   return (
      <form onSubmit={handleSubmit} >
         {/* User Input Field */}
         <TextField
            id="standard-basic"
            className="Form"
            variant="standard"
            label="Type something, maybe a line from the show?"
            InputLabelProps={{
               sx: { paddingLeft: '20px' }, // Add padding to the left of the label
            }} value={text}
            onChange={(e) => setText(e.target.value)}
         />
         {/* Submit Button */}
         <div>
            <Button
               variant='contained'
               type='submit'
               className="Submit-btn"
            >Submit</Button>
            <ToggleMicBtn isMute={isMute} setIsMute={setIsMute} />
         </div>
      </form >
   )
}

export default Form;