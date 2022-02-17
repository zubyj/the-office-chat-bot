import React from 'react';
import Button from '@mui/material/Button';
import MicOnIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

function ToggleMicBtn({isMute, setIsMute}) {

    return (
        <Button 
          variant="contained"
          className="Button-1"
          onClick={() => setIsMute(!isMute)}>
        {!isMute ? <MicOnIcon/> : <MicOffIcon/>}
      </Button>
    )
}

export default ToggleMicBtn