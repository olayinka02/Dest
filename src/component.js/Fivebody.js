import React, { Component } from 'react';


 import { Row, Col, Container } from 'react-bootstrap';
 



class Fivebody extends Component {
  render() {

    return (
      <div classname="footer" style={{backgroundColor:'darkred',paddingBottom:2+'em',}} >
          <br/><br/>
          <Container fluid >
            <div >
          <Row>
            <Col md={4} sm={12}>
                <div className="aboutfoot" >
                <h5>About Us</h5><hr style={{color:'white',}}/>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. elit Nulla vitae elit libero, a pharetra augue mollis interdum. elit libero, a pharetra a pharetra  libero, a pharetra a pharetra augue mollis interdum. elit libero, a pharetra</p>
                </div>
            </Col><br/>
    
           <Col md={4} sm={12}>
               <Row style={{color:'white',}}>
                <Col md={6} sm={12}>
                <div>
                <ul className="listednavitem" >
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>More About</li>
                    <li>Stream</li>
                </ul>
               </div>
               </Col>
               <Col md={6} sm={12}>
               <div>
                <ul className="listednavitem" >
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>More About</li>
                    <li>Stream</li>
                </ul>
               </div>
               </Col>
               </Row>
               
           </Col><br/>

           <Col md={4} sm={12}>
               <div >
              <h1 style={{color:'black',fontSize:3.5+'rem',marginTop:1+'rem',fontWeight:'bold',}}>dest</h1>
              <p style={{color:'white',}}>powered by Olayinka @ 2021.</p>
               </div>
               </Col>
               </Row>
               </div>
         
         </Container>
      </div>
    );
  }
}


export default Fivebody;