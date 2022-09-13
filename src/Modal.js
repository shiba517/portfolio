import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/esm/Modal'


function MyVerticallyCenteredModal(props) {
    console.log('----')
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <h2>{}</h2>
            <p></p>
        </Modal>        
    );
}

export default MyVerticallyCenteredModal