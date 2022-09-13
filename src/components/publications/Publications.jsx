import "./Publications.css"
import PublicationList from "../../assets/publications.json"
import Publication from './Publication'

const Publications = (props) => {

    return(
        <div id="publications-container" className="section-container">
            <div className="container-row">
                <h1>Publications</h1>
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