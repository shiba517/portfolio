import 'bootstrap/dist/css/bootstrap.min.css';
import CV_from_SHIBA_DEB from './assets/cv/shiba_deb_cv.pdf'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import * as FontAwesome from 'react-icons/fa'
import React from 'react';


function HeroSection(props) {
    return (
        <Container fluid className='my_herosection d-flex align-items-center justify-content-center'>
            <Row>
                <h1 className='text-center text-uppercase my_title'>SHIBA</h1>
                <div className='text-center'>
                    <Button href={CV_from_SHIBA_DEB} download className='mx-1 my_button'>My CV</Button>
                    <Button className='mx-1 my_button' href='#projects_section'>Projects
                    </Button>
                </div>
                <div className='text-center my_socialmediaicons'>
                    {props.socialmediaPlatforms.map((platform) => (
                        <a href={platform.url} target="_blank">
                            {React.createElement(FontAwesome[platform.fa_icon])}
                        </a>
                        ))}
                </div>
            </Row>
        </Container>
    )
}

export default HeroSection

