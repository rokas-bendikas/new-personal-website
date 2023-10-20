import "./About.css";
import ME from "../../assets/self.jpeg";

const About = (props) => {
  return (
    <div className="section-container">
      <div id="about-title" className="container-row">
        <div className="container-column">
          <h5>Hello, I'm</h5>
          <h1>Rokas Bendikas</h1>
        </div>
      </div>
      <div id="about-body" className="container-row">
        <div className="container-column">
          <p />I am a PhD in Foundational AI student at{" "}
          <a href="https://www.ucl.ac.uk">University College London</a>. My
          research focuses on latent world models and their applications in
          visuomotor robot control problems. In simpler terms, I aspire to allow
          robots to perceive, reason, and act as humans do daily.
          <p />
          During my studies, I co-founded a startup, called InHive. We are
          trying to help students find compatible roommates and affordable
          accommodation worldwide.
          <p />
          During my Master's degree, I completed my thesis at{" "}
          <a href="https://www.imperial.ac.uk/dyson-robotics-lab/">
            Dyson Robotics Lab
          </a>
          , supervised by Prof. Andrew Davison. My project introduced
          imagination-augmented DQN, that allows to learn optimal behavioural
          policy in dynamically complex environments.
          <p />
          Previously I was a research assistant in{" "}
          <a href="https://www.cemrg.co.uk">
            Cardio-Electro Magnetic Research Group (CEMRG)
          </a>
          , investigating atrial fibrillation mechanisms through the means of
          Deep Learning and Computational Modelling. My work was supervised by
          Dr. Caroline Roney and Prof. Steven Niederer.
        </div>
        <div className="container-column">
          <div id="my-photo-shadow">
            <img src={ME} alt="A virtual representation of myself" />
          </div>
        </div>
      </div>

      <div id="CV-row" className="container-row">
        <div className="container-column">
          <div className="CV-button">
            <a href="CV.pdf" target="_blank" rel="noreferrer">
              My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
