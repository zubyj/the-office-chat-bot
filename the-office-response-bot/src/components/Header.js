import React from 'react';
import logo from './../prison-mike.png';

function Header({title}) {

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
             <h1 className="Title">{title}</h1>
        </div>
    )
}

export default Header;