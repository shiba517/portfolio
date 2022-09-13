import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillHome, AiFillAppstore, AiFillContacts} from 'react-icons/ai'
import {MdNaturePeople} from 'react-icons/md'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
        <Nav className='my_navigation'>
            <a href="#"><AiFillHome/></a>
            <a href="#aboutme_section"><MdNaturePeople/></a>
            <a href="#projects_section"><AiFillAppstore/></a>
            <a href="#contact_section"><AiFillContacts/></a>
        </Nav>
    )
}

export default Navigation
