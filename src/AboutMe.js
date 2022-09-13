import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image'
import Button from 'react-bootstrap/esm/Button';
import me from './assets/images/me.jpg'
// import React from 'react';
import MyVerticallyCenteredModal from './Modal'
import * as FontAwesome from 'react-icons/fa'


function AboutMe(props) {
    // console.log(props.aboutme[0])
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <section id='aboutme_section'>
            <Container>
                <h2 className='text-center'>About Me</h2>
                <Row>
                    <Col sm={6} className='my_image_area'>
                        <Image src={me} className='my_image_me img-thumbnail'></Image>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            {props.aboutme.map((amCard) => (
                                <Col md={4} >
                                    <Card className='my_card text-center'>
                                        <Card.Body>
                                            <Card.Subtitle className='my_icon'>
                                            {React.createElement(FontAwesome[amCard.card[0].fa_icon])}
                                            </Card.Subtitle>
                                            <Card.Title>{amCard.card[0].title}</Card.Title>
                                            <Button className='my_button' onClick={() => setModalShow(true)}>
                                                more
                                            </Button>
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                                aboutme={amCard.card[0]}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}                           
                        </Row>                      
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe