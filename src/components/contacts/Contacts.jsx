import {useForm} from 'react-hook-form';
import {useState} from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGooglescholar} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'

import "./Contacts.css"
import 'react-toastify/dist/ReactToastify.min.css';


const Contacts = (props) => {

    const [state,changeState] = useState("Submit");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

    // Function that displays a success toast on top right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Message sent!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {

        changeState("Sending...")

        const { name,email,message } = data

        try {
            const templateParams = {
              name,
              email,
              message
            };

            await emailjs.send(
                'service_df577h9',
                'template_ppzyudb',
                templateParams,
                'svv7HBiVS8yAQbVbo'
            );

            reset();
            changeState("Submit")
            toastifySuccess();

            } catch(e){
                console.log(e);
        }
    }

    return(
        <div className="section-container">
            <div id="contacts-title" className='container-row'>
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
                <div id="container-column-form" className="container-column" >
                    <div id="contacts-form">
                        <Form onSubmit = {handleSubmit(onSubmit)} noValidate>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label><h4>Name</h4></Form.Label>
                                <Form.Control type="text" placeholder="Your name" 
                                    {...register('name', {
                                    required: { value: true, message: 'Please enter your name' },
                                    maxLength: {value: 30, message: 'Please use 30 characters or less'}
                                    })}
                                    className='form-control formInput'/>
                                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label><h4>Email</h4></Form.Label>
                                <Form.Control type="email" placeholder="Your email" 
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                    className='form-control formInput'/>
                                    {errors.email && (
                                        <span className='errorMessage'>Please enter a valid email address</span>
                                    )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="text">
                                <Form.Label><h4>Message</h4></Form.Label>
                                <Form.Control as="textarea" rows={6} placeholder="Your message" 
                                    {...register('message', {
                                        required: true
                                    })}
                                    className='form-control formInput'/>
                                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                            </Form.Group>
                            <Button variant="custom" type="submit">{state}</Button>
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
            <ToastContainer />
        </div>
    );   
}

export default Contacts