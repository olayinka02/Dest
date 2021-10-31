import React, { Component } from 'react';


 import { Row, Col, Container } from 'react-bootstrap';




class Secondbody extends Component {
  render() {

    return (
      <div classname="secondxx">
          <Container>
              <br/><br/>
              <h2 className="whyus">Why Us..</h2>
              <br/>
           <Row>
            <Col md={4} sm={12}>
                <div className="smallbody">
                <h3>Latest Update</h3><hr style={{color:'white',}}/>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. elit Nulla vitae elit libero, a pharetra augue mollis interdum. elit libero, a pharetra a pharetra  libero, a pharetra a pharetra augue mollis interdum. elit libero, a pharetra</p>
                </div>
            </Col><br/>
    
           <Col md={4} sm={12}>
               <div className="smallbody">
               <h3>Quality view</h3><hr style={{color:'white',}}/>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. elit Nulla vitae elit libero, a pharetra augue mollis interdum. elit libero, a pharetra a pharetra  libero, a pharetra a pharetra augue mollis interdum. elit libero, a pharetra</p> 

               </div>
           </Col><br/>

           <Col md={4} sm={12}>
               <div className="smallbody">
               <h3>Reliable</h3><hr style={{color:'white',}}/>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. elit Nulla vitae elit libero, a pharetra augue mollis interdum. elit libero, a pharetra a pharetra  libero, a pharetra a pharetra augue mollis interdum. elit libero, a pharetra</p>
               </div>
           </Col>
          </Row>
         </Container>
      </div>
    );
  }
}


export default Secondbody;