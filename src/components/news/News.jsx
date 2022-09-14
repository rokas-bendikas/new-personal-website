import "./News.css"

const News = (props) => {
    return(
        <div className="section-container">
            <div className="news-item container-row">
                <div className="container-column news-date">
                    Jun 2,
                    <br />
                    2022
                </div>
                <div className="container-column news-content">
                Accepted an offer for a fully-funded PhD in Foundational AI, supervised by Prof. Danail Stoyanov and Dr. Francisco Vasconcelos at University College London.
                </div>
            </div>
        </div>
    );   
}

export default News