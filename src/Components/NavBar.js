import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
  render() {
    return (

            <Navbar sticky="top" bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Work Experience</Nav.Link>
                    <Nav.Link href="#link">Education</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                  </Nav>
              </Container>
            </Navbar>
    )
  }
}

export default NavBar