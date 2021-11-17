import React, { Component } from 'react';


 import { Row, Col, Container, Card, Button } from 'react-bootstrap';
 import imageone from './imagex/imageone.jpg';
 import imagetwo from './imagex/imagetwo.jpg';
 import imagethree from './imagex/imagethree.jpg';
 import imagefour from './imagex/imagefour.jpg';
 import imagefive from './imagex/imagefive.jpg';
 import imagesix from './imagex/imagesix.jpg';
 import imageseven from './imagex/imageseven.jpg';
 import imageeight from './imagex/imageeight.jpg';
 



class Fourthbody extends Component {
     

  render() {


    return (
      <div ref={this.myRef} classname="fourthxx">
          <Container>
              <br/><br/>
              <h2 className="whyus">0ur Products..</h2>
              <br/>
           <Row className="rowcardbody">
            <Col md={3} sm={12}>
                <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imageone} />
               <Card.Body>
                <Card.Title>Little Evil</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus. 
                </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
            </Col><br/>
    
           <Col md={3} sm={12}>
           
           <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imagetwo} />
               <Card.Body>
                <Card.Title>Queen Monster</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus. 
                </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
                
           </Col><br/>

           <Col md={3} sm={12}>
           <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imagethree} />
               <Card.Body>
                <Card.Title>Bad Age</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus.
                </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
           </Col>

           <Col md={3} sm={12}>
           <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imagefour} />
               <Card.Body>
                <Card.Title>Lust</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus.
               </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
           </Col>
          </Row><br/>

          <Row className="rowcardbody">
            <Col md={3} sm={12}>
                <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imagefive} />
               <Card.Body>
                <Card.Title>Matters</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus. 
                </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
            </Col><br/>
    
           <Col md={3} sm={12}>
           
           <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imagesix} />
               <Card.Body>
                <Card.Title>Rollings</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Quisque luctus vestibulum lorem ut tempus. 
                </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
                
           </Col><br/>

           <Col md={3} sm={12}>
           <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imageseven} />
               <Card.Body>
                <Card.Title>Mindfull</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor  Quisque luctus vestibulum lorem ut tempus.
                </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
           </Col>

           <Col md={3} sm={12}>
           <div className="cardbody">
                <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:2,borderColor:'whitesmoke', }}>
               <Card.Img variant="top" src={imageeight} />
               <Card.Body>
                <Card.Title>City gate</Card.Title>
               <Card.Text style={{fontSize:0.8+'rem',}}>
               Lorem ipsum dolor sit amet, coectetur adipiscing elit. Quisque luctus vestibulum lorem ut tempus.
               </Card.Text>
                <Button variant="danger">watch video</Button>
                </Card.Body>
                </Card>
                </div>
               </Col>
          </Row>
         </Container>
      </div>
    );
  }
}


export default Fourthbody;