import { useState } from 'react';
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
        <div id="publication-body" className="container-row">
            <div className="container-column">
                <div id="publication-text">
                    <b>{props.publication.title}</b>
                    <hr />
                    {props.publication.authors}
                    <br />
                    <br />
                    <i>{props.publication.venue}</i>, {props.publication.year}
                </div>
            </div>
            <div className="container-column">
                <div id="publication-icons">
                    <a href={props.publication.link} target="_blank" rel="noreferrer"><AiFillFilePdf /></a>
                    <button onClick={() => {setButtonState(!buttonState)}}><RiFilePaperLine /></button>
                </div>
            </div>
        </div>
        <div id="abstract-body" className="container-row">
            <div className="container-column">
                <div style={buttonState ? mountedStyle : unmountedStyle}>
                    <Abstract publication={props.publication} />
                </div>  
            </div>
        </div>
        </>
        
    )
}

export default Publication