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
        <div id="contacts-container" className="section-container">

            {/* The row containing all the text at the top */}
            <div className='container-row'>
                <div className="container-column">
                    <p>
                        <h1>Contact Me!</h1>
                    </p>
                    <p>
                        <h5>Do you want to have a chat? Or maybe have some ideas about collaboration? Do bot hesitate to contact me using the form below!</h5>
                    </p>
                </div>
            </div>

            {/* The row containing the email form and social media icons */}
            <div id="contacts-body" className="container-row">

                {/* The column containing the email form */}
                <div className="container-column" >
                    <div id="contacts-form">
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
                    </div>
                </div>

                {/* The column containing the social media icons */}
                <div className="container-column" >
                    <div id="contacts-social-icons">
                        <a href="https://www.linkedin.com/in/rokas-bendikas/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/rokas-bendikas/" target="_blank" rel="noreferrer"><BsGithub /></a>
                        <a href="https://twitter.com/bendikasrokas/" target="_blank" rel="noreferrer"><BsTwitter /></a>
                        <a href="https://scholar.google.co.uk/citations?user=_4b1EvAAAAAJ&oi=ao" target="_blank" rel="noreferrer"><SiGooglescholar /></a>
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default Contacts