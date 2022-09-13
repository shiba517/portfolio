import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import * as FontAwesome from 'react-icons/fa'

function Projects(props) {
    return (
        <section id='projects_section'>
            <Container>
                <h2 className='text-center'>Projects</h2>
                <Row>                  
                    {props.allProjects.map((project) => (
                        <Col sm={6} md={4} className='card-group'>
                            <Card className='my_card'>
                                <Card.Body>
                                    <img src={project.image}></img>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button className='my_button' href={project.url}>Visit</Button>
                                    <Button className='my_button' href={project.github}>
                                        {React.createElement(FontAwesome['FaGithubSquare'])}
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}                      
                </Row>
            </Container>
        </section>
        
    )
}

export default Projects

    