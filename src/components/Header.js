import React from 'react';
import '../styles/Header.css';

const Header=(props)=>(
    <div className="header">
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
    </div>
)

export default Header;