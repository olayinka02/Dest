 import React, { Component } from 'react';
import {  } from 'react-bootstrap-icons';

 import { Navbar, Nav,  Container, Button } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
 
import logo from './imagex/logo.png';




class Navbarx extends Component {
  
  render() {

  
      
    return (
     
      <div>
        
        <Navbar  collapseOnSelect expand="lg" variant="dark" className="navbar">
  <Container>
  <Navbar.Brand href="#home">  <Link to="./"><img src={logo} class="img-fluid" alt="..."/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" >update</Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {" "}
      { " "}
     
      <Nav.Link >
        <Link to="./pricing" className="linkchildren"> Pricing</Link>
      </Nav.Link>

      <Nav.Link >
        <Link to="./pricing" className="linkchildren"> Features</Link>
      </Nav.Link>
    
      <Nav.Link >
        <Link to="./pricing" className="linkchildren"> About</Link>
      </Nav.Link>
    
      <Nav.Link >
        <Link to="./pricing" className="linkchildren"> Cartalog</Link>
      </Nav.Link>
    
      <Nav.Link >
        <Link to="./pricing" className="linkchildren">  movies</Link>
      </Nav.Link>
    
    
      
    </Nav>
    <Nav className="justify-content-end d-flex">
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
      <Button className="loginbtn" variant="outline-danger" size="lg" >{" "}Login{" "}</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


      </div>
    );
  }
}


export default Navbarx;
