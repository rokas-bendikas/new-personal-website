import "./Publications.css"
import PublicationList from "../../assets/publications.json"

import {AiFillFilePdf} from 'react-icons/ai'
import {RiFilePaperLine} from "react-icons/ri"

const Publications = (props) => {

    return(
        <div className="section-container">
            <div className="container-row">
                <h1>Publications</h1>
            </div>

            <div id="publications-body" className="container-row">
                {
                    PublicationList.map(publication => {
                        return(
                            <div className="publication">
                                <div className="publication-text">
                                    <b>{publication.title}</b>
                                    <br ></br>
                                    {publication.authors}
                                    <br />
                                    <i>{publication.venue}</i>, {publication.year}
                                </div>
                                <div className="publication-icons">
                                    {console.log(publication.pdf)}
                                    <a href={require('../../assets/ConstructingAHumanAtrialFibreAtlas.pdf')} target="_blank" rel="noreferrer"><AiFillFilePdf /></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );   
}

export default Publications