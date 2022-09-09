import { Container,Row,Col} from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGooglescholar} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'

import "./Contacts.css"


const Contacts = (props) => {

    const handleSubmit = (event) => {
        console.log(event.currentTarget);
    }

    return(
        <Container id="contact-container">

            {/* The row containing all the text at the top */}
            <Row className='text-center my-3'>
                <p>
                    <h1>Contact Me!</h1>
                </p>
                <p>
                    <h5>Do you want to have a chat? Or maybe have some ideas about collaboration? Do bot hesitate to contact me using the form below!</h5>
                </p>
            </Row>

            {/* The row containing the email form and social media icons */}
            <Row className="my-3">

                {/* The column containing the email form */}
                <Col sm={12} lg={8} id='contact-form-block' >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label><h4>Your name</h4></Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Your message" />
                        </Form.Group>
                        <Button variant="custom" type="submit">Submit</Button>
                    </Form>
                </Col>

                {/* The column containing the social media icons */}
                <Col sm={12} lg={4}>
                    <Container className="container-social-icons">
                        <Row className="justify-content-md-center">
                            <Col sm={3} lg={12}>
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                            </Col>
                            <Col sm={3} lg={12}>
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsGithub /></a>
                            </Col>
                            <Col sm={3} lg={12}>
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsTwitter /></a>
                            </Col>
                            <Col sm={3} lg={12}>
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><SiGooglescholar /></a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );   
}

export default Contacts