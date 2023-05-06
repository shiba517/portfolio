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
            <Container className='container'>
                <h2 className='text-center'>Projects</h2>
                <Row>                  
                    {props.allProjects.map((project) => (
                        <Col sm={6} md={4} className='card-group'>
                            <Card className='my_card d-flex align-items-start flex-column'>
                                <Card.Body>
                                    <img src={project.image}></img>
                                    <Card.Title className='fw-bold'>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer className='w-100 align-text-bottom d-flex align-items-end flex-column'>
                                    <div className=''>
                                        <Button className='my_button' href={project.url} target="_blank">Visit</Button>
                                        <Button className='my_button' href={project.github} target="_blank">
                                            {React.createElement(FontAwesome['FaGithubSquare'])}
                                        </Button>
                                    </div>
                                    
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

    