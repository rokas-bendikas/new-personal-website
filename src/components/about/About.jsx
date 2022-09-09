import "./About.css"
import ME from "../../assets/self.jpeg"

const About = (props) => {
    return(
        <div id="about-container" className="section-container">
            <div id="about-header" className="container-row">
                <div className="container-column">
                    <h5>Hello, I'm</h5>
                    <h1>Rokas Bendikas</h1>
                </div>
            </div>

            <div id="about-body" className="container-row">
                <div className="container-column">
                    <p>
                    I am a PhD student at <a href="https://www.ucl.ac.uk" >University College London</a>, working in the field of Robotic Control and Robot Learning. 
                    My research project is focused on ‘Learning priors of high-level and low-level motion representations for autonomous robot control’. 
                    The project is fully-funded for 4 years by CDT in Foundational AI programme. 
                    The project is supervised by Prof. Danail Stoyanov and Dr. Francisco Vasconcelos.
                    </p>
                    <p>
                    During my Master’s studies, I completed my thesis at <a href="https://www.imperial.ac.uk/dyson-robotics-lab/" >Dyson Robotics Lab</a>, supervised by Prof. Andrew Davison. 
                    My project introduced imagination-augmented DQN, that allowed to learn optimal behavioural policy in dynamically complex environments.
                    </p>
                    <p>
                    Previously I was a research assistant in Cardio-Electro Magnetic Research Group (CEMRG), investigating atrial fibrillation mechanisms through the means of Deep Learning and Computational Modelling. 
                    My work was supervised by Dr. Caroline Roney and Prof. Steven Niederer. 
                    </p>
                </div>
                <div className="container-column">
                    <div className="my-photo-shadow">
                        <img src={ME} alt='A virtual representation of myself' />
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default About