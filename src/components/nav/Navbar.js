import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from "../../../assets/images/sou.png"
import Logo2 from "../../../assets/images/fernweh.png"
// require('dotenv').config() 

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#"> <img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Brand href="#"> <img className="logo" src={Logo2} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '100px' }}>
                        <Nav.Item>
                            <Nav.Link href="#" active>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Contact Us</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Ticket Book" id="navbarScrollDropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                        </NavDropdown>
                   
                    </Nav>
                    {/* <Form className="d-flex" role="search">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

