import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form({text, setText, handleSubmit}) {

   return (
      <form onSubmit={handleSubmit}>
         {/* User Input Field */}
         <TextField 
            id="standard-basic"
            className="Text-form"
            variant="standard"
            fullWidth="20"
            label="Type something, maybe a line from the show?"
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         {/* Submit Button */}
         <div className="Submit-btn">
            <Button variant='contained' type='submit'>Submit</Button>
         </div>
      </form>
   )
}

export default Form;