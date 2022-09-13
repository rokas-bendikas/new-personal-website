import { useState } from 'react';
import  {Link} from 'react-router-dom'
import {AiFillFilePdf} from 'react-icons/ai'
import {RiFilePaperLine} from "react-icons/ri"

import { Abstract } from './Abstract';

import "./Publications.css"

function Publication(props) {

    const [buttonState, setButtonState] = useState(false);

    const mountedStyle = {
        animation: "inAnimation 800ms ease-in"
    };

    const unmountedStyle = {
        animation: "outAnimation 100ms ease-out",
        animationFillMode: "forwards"
    };

    return (
        <>
        <div className="container-row publication-box">
            <div className="container-column">
                <div className="publication-text">
                    <b>{props.publication.title}</b>
                    <br />
                    <br />
                    {props.publication.authors}
                    <br />
                    <br />
                    <i>{props.publication.venue}</i>, {props.publication.year}
                </div>
            </div>
            <div className="container-column publication-icons">
                <Link to={process.env.PUBLIC_URL + props.publication.pdf} target="_blank"><AiFillFilePdf /></Link>
                <button onClick={() => {setButtonState(!buttonState)}}><RiFilePaperLine /></button>
            </div>
        </div>
        <div style={buttonState ? mountedStyle : unmountedStyle}>
            <Abstract publication={props.publication} />
        </div>  
        </>
        
    )
}

export default Publication