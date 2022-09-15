import "./Publications.css"
import PublicationList from "../../assets/publications.json"
import Publication from './Publication'

const Publications = (props) => {

    return(
        <div className="section-container">
            <div id="publications-title" className="container-row">
                <div className="container-column">
                    <h1>Publications</h1>
                </div>
            </div>
            
            {
                PublicationList.map((publication) => (
                    <Publication publication={publication} />
                ))
            }
            
        </div>
    );   
}

export default Publications