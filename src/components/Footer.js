import React from 'react';
import '../styles/Footer.css';


const Footer=(props)=>(
    <div className="footer">
        <h4>{props.subTitle}</h4>
        <nav>
            <a className="footer--links" href={props.twitterProfile}>Find on Twitter</a> | 
            <a className="footer--links" href={props.faceBookProfile}>Find on facebook</a> | 
            <a className="footer--links" href={props.linkedinProfile}>Find on linkedIn</a> |
        </nav>
    </div>
)

export default Footer;