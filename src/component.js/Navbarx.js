import React, { Component } from 'react';
import {  } from 'react-bootstrap-icons';

 import { Navbar, Nav,  Container, Button } from 'react-bootstrap';
import logo from './imagex/logo.png';



class Navbarx extends Component {
  render() {


    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
  <Container>
  <Navbar.Brand href="#home">  <img src={logo} class="img-fluid" alt="..."/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {" "}
      { " "}
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav className="justify-content-end d-flex">
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
      <Button className="loginbtn" style={{float:'right',}} variant="outline-danger" size="lg" >{" "}Login{" "}</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
    );
  }
}


export default Navbarx;
