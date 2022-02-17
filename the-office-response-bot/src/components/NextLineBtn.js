import React from 'react'; 
import Button from '@mui/material/Button';

function NextLineBtn({data, botResponse, setUserText}) {

    const getNextLine = () => {
        let index = data.indexOf(botResponse);  
        let response = data[index+1].toString();
        setUserText(response);
    }

    return (
        <Button 
            variant='contained' 
            onClick={getNextLine}
            className="Button-1"
            color="secondary"
        >

            Get next line
        </Button>
    )
}

export default NextLineBtn;
