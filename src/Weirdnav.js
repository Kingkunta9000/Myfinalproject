import React, { Component } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

class Weirdnav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">General Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/Productss">Product</Nav.Link>
          
          
          
        </Nav>
      
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default Weirdnav;
