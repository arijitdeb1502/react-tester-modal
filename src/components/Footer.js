import React from 'react';
import '../styles/Footer.css';


const Footer=(props)=>(
    <div className="footer">
        <h4>Contact: {props.subTitle} Email: {props.subTitleEmail}</h4>

        <nav>
            <a className="footer--links" href={props.twitterProfile}>{props.twitterText}</a> | 
            <a className="footer--links" href={props.faceBookProfile}>{props.faceBookText}</a> | 
            <a className="footer--links" href={props.linkedinProfile}>{props.linkedInText}</a> |
        </nav>
    </div>
)

export default Footer;