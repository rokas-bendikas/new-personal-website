import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const WebsiteNavbar = (props) => {
    return(
        <Navbar bg="light" expand="lg" sticky="bottom" fixed="bottom">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>About</Nav.Link>
                        <Nav.Link href='/projects'>Projects</Nav.Link>
                        <Nav.Link href='/publications'>Publications</Nav.Link>
                        <Nav.Link href='/contacts'>Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container>
            
        </Container>
    );   
}

export default WebsiteNavbar