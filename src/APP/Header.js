import {Navbar, Nav, Container} from 'react-bootstrap';
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header className="page-header shadow-sm">
            <Navbar collapseOnSelect bg="dark" variant='dark' expand="lg" >
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <FontAwesomeIcon className="mx-3" icon={faDragon} />
                        James-Busan
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-collapse"/>
                    <Navbar.Collapse id="navbar-collapse" >
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" eventKey="1">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" eventKey="2">About</Nav.Link>
                            <Nav.Link as={Link} to="/projects" eventKey="3">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact" eventKey="4">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}