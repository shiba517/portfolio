import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
// import CardContent from 'react-bootstrap/esm/CardHeaderContext'
// import CardContent from 'react-bootstrap/esm/CardContent';
import Image from 'react-bootstrap/esm/Image'
import Button from 'react-bootstrap/esm/Button';
import me from './assets/images/me.jpg'
import MyVerticallyCenteredModal from './Modal'
import * as FontAwesome from 'react-icons/fa'
import AboutMeSkills from './AboutMeSkills';


function AboutMe2(props) {
    const [cardShow, setCardShow] = useState({
        title: '',
        context: ''
    });
    const cardTitle = cardShow.title
    const cardContext = cardShow.context

    function changeText(info) {
        setCardShow(prevCard => {
            return {
                // title: prevCard.title = info.title,
                title: prevCard.title = prevCard.title != info.title ? info.title : '',
                context: prevCard.context = prevCard.title == info.title ? <AboutMeSkills mySkills={info} table={info.context}></AboutMeSkills> : ''}
        })
    }

    return (
        <section id='aboutme_section'>
            <Container>
                <h2 className='text-center'>About Me</h2>
                <Row>
                    <Col md={6} className='my_image_area'>
                        <Image src={me} className='my_image_me img-thumbnail'></Image>
                    </Col>
                    <Col sm={12} md={6}>
                        <Row>
                            {props.aboutme.map((amCard) => (
                                <Col sm={6} md={4}>
                                    <Card className='my_card text-center'>
                                        <Card.Body>
                                            <Card.Subtitle className='my_icon'>
                                            {React.createElement(FontAwesome[amCard.card[0].fa_icon])}
                                            </Card.Subtitle>
                                            <Card.Title>{amCard.card[0].title}</Card.Title>

                                            <Button className='my_button d-none d-md-block mx-auto' onClick={() => changeText(amCard.card[0])}>
                                                more
                                            </Button>
                                            <Button className='my_button d-sm-none' onClick={() => changeText(amCard.card[0])}>
                                                more 
                                            </Button>

                                            <div className='d-sm-none mt-4'>
                                                <p>
                                                    {cardTitle == amCard.card[0].title ? cardContext : ''} 
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}                           
                        </Row> 
                        <Row className={ `d-none hidden ${cardTitle != "" ? "d-md-block" : ""}` }>
                            <Card className='my_card_aboutme_context text-center'>
                                <Card.Body>
                                    <Card.Text>{cardContext}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>                     
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe2