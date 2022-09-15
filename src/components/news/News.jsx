import "./News.css"

const News = (props) => {
    return(
        <div className="section-container">
            <div className="container-row">
                <div className="container-column">
                        <h1>News</h1>
                    </div>
                </div>
            <div className="container-row">
                <div className="container-column">
                    <div className="news-item">
                        <div className="news-date">
                            Jun 2,
                            <br />
                            2022
                        </div>
                    </div>

                <div className="container-column">
                    <div className="news-content">
                        Accepted an offer for a fully-funded PhD in Foundational AI, supervised by Prof. Danail Stoyanov and Dr. Francisco Vasconcelos at University College London.
                    </div>
                </div>
                </div>
            </div>
        </div>
    );   
}

export default News