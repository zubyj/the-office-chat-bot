import React from 'react';
import Button from '@mui/material/Button';

function RandomLineBtn({data, setUserText}) {

    // Returns random line. 
    const getRandomLine = (e) => {
        let max = parseInt((data.length-1));
        let randomIndex = Math.floor(Math.random() * max); 
        setUserText(data[randomIndex]);
    }

    return (
        <Button variant='outlined' onClick={getRandomLine}>
            Get random line
      </Button>
    )
}

export default RandomLineBtn;