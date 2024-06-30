import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from "../../assets/images/sou.png"
import Logo2 from "../../assets/images/fernweh.png"
import Marquee from "./Marquee";
// require('dotenv').config() 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'; // Import the icon


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const linkstyle = {
        textDecoration: "none",
        color: "inherit"
    }

    return (
        <>
            <Marquee />

            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#"> <img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Brand href="#"> <img className="logo" src={Logo2} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '100px' }}>
                            <Nav.Item>
                                <Nav.Link >
                                    <Link to="/home" style={linkstyle}>
                                        Home
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link >
                                    <Link to="/contactus" style={linkstyle}>
                                        Contact Us
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/lists" style={linkstyle}>
                                        Ticket
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/aboutstatue" style={linkstyle}>
                                        About SoU
                                    </Link >
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/attractions" style={linkstyle}>
                                    Tourist Attractions
                                    </Link >
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <FontAwesomeIcon icon={faPhoneVolume} className="me-3" />

                        {(!isLoggedIn)
                            ?
                            <Link to="/login">
                                <Button className="btn btn-success" onClick={() => setIsLoggedIn(true)}>
                                    Log-in
                                </Button>
                            </Link>
                            :
                            <Button className="btn btn-danger" onClick={() => setIsLoggedIn(false)}>Logout</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

