
// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/esm/Card';
// import Image from 'react-bootstrap/esm/Image'
// import Button from 'react-bootstrap/esm/Button';
// import * as FontAwesome from 'react-icons/fa'
// import Table from 'react-bootstrap/esm/Table'

function AboutMeSkills(props) {  
    if (props.mySkills.title === 'Bio') {
        return (
            <p>{props.mySkills.context}</p>
        )
    } else if (props.mySkills.title === 'Education') {        
        return (
            (props.mySkills.context2).map((ed, i) => (
                <p>{props.mySkills.context2[i].title}</p>
            ))
        )
    }
    else if ([props.mySkills.title === 'Skills']) {
        return (
            <Row>
            { (props.mySkills.context).map((skills, i) => (
                <Col sm={4}>
                    <div className='mb-3'>
                        <p className='mb-2 text-uppercase fw-bold border-bottom-2'>{props.mySkills.context[i].name}</p>
                        { (props.mySkills.context[i].items).map((item, i) => (
                            <p className='my-1 py-0'>{ item }</p>
                        )) }
                    </div>
                </Col>
                
            )) }
        </Row>
        )
    }
    
}

export default AboutMeSkills