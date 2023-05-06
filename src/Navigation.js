import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFaceSmile, faCode, faHand } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    return (
        <Nav className='my_navigation'>
            {/* <a href="#"><AiFillHome/></a> */}
            <a href="#"><FontAwesomeIcon icon={faHouse} /></a>
            <a href="#aboutme_section"><FontAwesomeIcon icon={faFaceSmile} /></a>
            <a href="#projects_section"><FontAwesomeIcon icon={faCode} /></a>
            <a href="#contact_section"><FontAwesomeIcon icon={faHand} /></a>
        </Nav>
    )
}

export default Navigation
