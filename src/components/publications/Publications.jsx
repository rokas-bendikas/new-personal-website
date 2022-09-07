import { Container,Row,Col} from "react-bootstrap";
import "./Publications.css"
import ME from "../../assets/self.jpeg"
import Transitions from '../router/Transitions'

const Publications = (props) => {
    return(
        <Container className="about-section">
            <Row className="header">
                <Col xs={12} className="text-center">
                    <h5>Hello, I'm</h5>
                    <h1>Rokas Bendikas</h1>
                </Col>
            </Row>
            <Row>
            
                <Col xs={12} md={6} className="text-justify">
                    <p>
                    I am a PhD student at University College London, working in the field of Robotic Control and Robot Learning. 
                    My research project is focused on ‘Learning priors of high-level and low-level motion representations for autonomous robot control’. 
                    The project is fully-funded for 4 years by CDT in Foundational AI programme. 
                    The project is supervised by Prof. Danail Stoyanov and Dr. Francisco Vasconcelos.
                    </p>
                    <p>
                    During my Master’s studies, I completed my thesis at Dyson Robotics Lab, supervised by Prof. Andrew Davison. 
                    My project introduced imagination-augmented DQN, that allowed to learn optimal behavioural policy in dynamically complex environments.
                    </p>
                    <p>
                    Previously I was a research assistant in Cardio-Electro Magnetic Research Group (CEMRG), investigating atrial fibrillation mechanisms through the means of Deep Learning and Computational Modelling. 
                    My work was supervised by Dr. Caroline Roney and Prof. Steven Niederer. 
                    </p>
                </Col>

                <Col xs={12} md={6} className="my-photo-block">
                    <img src={ME} alt='A picture of myself' />
                </Col>

            </Row>
        </Container>
    );   
}

export default Publications