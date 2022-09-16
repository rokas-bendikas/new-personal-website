import "./News.css"

const News = (props) => {
    return(
        <div className="section-container">

            <div id="news-title" className="container-row">
                <div className="container-column">
                    <h1>News</h1>
                </div>
            </div>

            <div id="news-item" className="container-row">
                <div className="container-column">
                    <div id="news-date">
                        Jun 20,
                        <br />
                        2022
                    </div>
                </div>

                <div id="news-separator" className="container-column">

                </div>

                <div className="container-column">
                    <div id="news-content">
                        Started a Software Engineering internship <a href="https://uk.mathworks.com/" target="_blank" rel="noreferrer">@MathWorks</a> Deep Learning team.
                    </div>
                </div>
            </div>

            <div id="news-item" className="container-row">
                <div className="container-column">
                    <div id="news-date">
                        Jun 2,
                        <br />
                        2021
                    </div>
                </div>

                <div id="news-separator" className="container-column">

                </div>

                <div className="container-column">
                    <div id="news-content">
                        Accepted an offer from <a href="https://www.ucl.ac.uk/" target="_blank" rel="noreferrer">University College London</a> for a fully-funded PhD in Foundational AI <a href="https://www.ucl.ac.uk/surgical-robot-vision/surgical-robot-vision" target="_blank" rel="noreferrer">@Surgical Robot Vision group</a>, supervised by Prof. Danail Stoyanov.
                    </div>
                </div>
            </div>

            <div id="news-item" className="container-row">
                <div className="container-column">
                    <div id="news-date">
                        Aug 1,
                        <br />
                        2020
                    </div>
                </div>

                <div id="news-separator" className="container-column">

                </div>

                <div className="container-column">
                    <div id="news-content">
                        Awarded BEng in Biomedical Engineering from <a href="https://www.kcl.ac.uk/" target="_blank" rel="noreferrer">King’s College London </a> with distinction.
                    </div>
                </div>
            </div>

            <div id="news-item" className="container-row">
                <div className="container-column">
                    <div id="news-date">
                        Jun 21,
                        <br />
                        2020
                    </div>
                </div>

                <div id="news-separator" className="container-column">

                </div>

                <div className="container-column">
                    <div id="news-content">
                        Accepted an offer from <a href="https://www.imperial.ac.uk/" target="_blank" rel="noreferrer">Imperial College London</a> for MSc Computing (Artificial Intelligence and Machine Learning) course.
                    </div>
                </div>
            </div>

        </div>
    );   
}

export default News