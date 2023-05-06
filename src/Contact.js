import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/esm/Container';
import {MdContactSupport, MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form'
import * as FontAwesome from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Anchor } from 'react-bootstrap';


function Contact(props) {
    const form = useRef();
    const notify = () => toast.success('Your message has been sent! I will get back to you ASAP', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cu0f3hf', 'template_uzer46i', form.current, 'QQIQKCJhbm8iZeSbA')
            .then((result) => {
                // console.log(result.text);
                notify();
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
        }
    
    return (
        <section id='contact_section'>
            <Container>
                <h2 className='text-center'>Get in touch</h2>
                <Row >
                    <Col md={4} >
                        <Row>
                            {props.allContacts.map((contact) => (
                                <Col sm={4} md={12}>
                                    <Card className='my_card text-center'>
                                        <Card.Body>
                                            {/* <Card.Title className='my_icon'>{React.createElement(FontAwesome[contact.fa_icon])}</Card.Title> */}
                                            <Card.Title>
                                                <Anchor className='my_icon' href={contact.href}>{React.createElement(FontAwesome[contact.fa_icon])}</Anchor>
                                            </Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button href={contact.href} className='my_button' >{contact.name}</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Form ref={form} onSubmit={sendEmail} className='my_form'>
                            <Form.Group className="mb-3" controlId="user_name">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control name='user_name' type="text" placeholder="Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="user_email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='user_email' type="email" placeholder="Enter email" />
                            </Form.Group> 
                            <Form.Group className="mb-3" controlId="user_message">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control name='user_message' as="textarea" rows={5} placeholder="Your message"/>
                            </Form.Group>                          
                            <Button className='my_button' type="submit">
                                Send message
                            </Button>
                            <ToastContainer />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact