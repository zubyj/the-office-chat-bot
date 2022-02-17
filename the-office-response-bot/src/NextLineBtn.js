import React from 'react'; 
import Button from '@mui/material/Button';

function NextLineBtn({data, botResponse, setUserText}) {

    const getNextLine = () => {
        let index = data.indexOf(botResponse);  
        let response = data[index+1].toString();
        setUserText(response);
    }

    return (
        <Button variant='outlined' onClick={getNextLine}>
            Get next line
        </Button>
    )
}

export default NextLineBtn;
