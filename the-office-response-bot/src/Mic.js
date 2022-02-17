import React from 'react';
import Button from '@mui/material/Button';
import MicOnIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

function Mic({isMute, setIsMute}) {

    return (
        <Button onClick={() => setIsMute(!isMute)}>
        {!isMute ? <MicOnIcon/> : <MicOffIcon/>}
      </Button>
    )
}

export default Mic