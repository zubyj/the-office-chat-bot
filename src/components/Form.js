import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form({text, setText, handleSubmit}) {

   return (
      <form onSubmit={handleSubmit}>
         {/* User Input Field */}
         <TextField 
            id="standard-basic"
            className="Form"
            variant="standard"
            label="Type something, maybe a line from the show?"
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         {/* Submit Button */}
         <div>
            <Button 
            variant='contained' 
            type='submit'
            className="Submit-btn"
            >Submit</Button>
         </div>
      </form>
   )
}

export default Form;