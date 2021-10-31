import React, { Component } from 'react';


 import { Row, Col, Container, Button } from 'react-bootstrap';
import vectary from './imagex/vectary.png';



class Thirdbody extends Component {
  render() {

    return (
      <div classname="thirdxx">
          <br/><br/>
          <Container>
           <Row>
            <Col md={6} sm={12}>
            <div className="rightdivtext">
                   <h1>Enjoy streaming and stream on <span style={{color:'#D81515',}}>{" "} dest</span></h1>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus. Nunc ac accumsan nulla. Aliquam ultrices ligula sit amet orci volutpat, non ullamcorper ex molestie. Proin accumsan aliquam molestie. Sed hendrerit sit amet risus non laoreet. Duis in nisl
                   </p>
                   <Button variant="outline-danger" size="lg" >{" "}View Dashboard{" "}</Button>

               </div>
            </Col>
    
           <Col md={6} sm={12}>
           <div className="imagemi">
                <img src={vectary} class="img-fluid" alt="..."/>

                </div>
              
           </Col>
          </Row>
         
         </Container>
      </div>
    );
  }
}


export default Thirdbody;