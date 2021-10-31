import React, { Component } from 'react';


 import { Row, Col, Container, Button } from 'react-bootstrap';
import myfone from './imagex/myfone.png';



class Firstbody extends Component {
  render() {

    return (
      <div classname="firstxx"><br/><br/>
          <Container>
           <Row>
            <Col md={6} sm={12}>
                <div>
                <img src={myfone} class="img-fluid" alt=".."/>

                </div>
            </Col>
    
           <Col md={6} sm={12}>
               <div className="leftdiv">
                   <h1>Enjoy <span style={{color:'#D81515',}}>dest</span> On Mobile</h1>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                   <Button variant="outline-danger" size="lg" >{" "}Download{" "}</Button>

               </div>
           </Col>
          </Row>
         </Container>
      </div>
    );
  }
}


export default Firstbody;