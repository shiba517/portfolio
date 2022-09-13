
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image'
import Button from 'react-bootstrap/esm/Button';
import * as FontAwesome from 'react-icons/fa'
import Table from 'react-bootstrap/esm/Table'

function AboutMeSkills(props) {
    // const string_content = JSON.stringify(props.mySkills.context)  // Returns context
    // console.log(typeof JSON.stringify(props))
    const c = props.mySkills.context
    // console.log(c)

    if (props.mySkills.title == 'Bio' || props.mySkills.title == 'Education') {
        return (
            <p>{props.mySkills.context}</p>
        )
    }
    else {
        return (
            <Table className='my_table'>
                <thead>
                    <tr>
                        {props.mySkills.context.map((heading) => (
                            <th>{heading.headingName}</th>
                        ))}
                    </tr>                  
                </thead>
                <tbody>
                    <tr>
                        <td>JavaScript</td>
                        <td>Django</td>
                        <td>Jquery</td>
                        <td>Github</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>MongoDB</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>HTML5</td>
                        <td>AWS</td>
                        <td>Bootstrap</td>
                    </tr>
                    <tr>
                        <td>CSS3</td>
                        <td>PySpark</td>
                        <td>Materialize</td>
                    </tr>
                    <tr>
                        <td>SQL</td>
                        <td>Pig</td>
                        <td>Hadoop</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>MySQL</td>
                        <td>Boto3</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Streamlit</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Pandas</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    
}

export default AboutMeSkills