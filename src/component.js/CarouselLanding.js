import React, { Component } from 'react';
//import { Check2Circle, ExclamationCircle, FileText, Laptop, Files } from 'react-bootstrap-icons';

 import { Carousel, Form, Button } from 'react-bootstrap';
 import firstpage from './imagex/firstpage.jpg';
 import secondpage from './imagex/secondpage.jpg';
 import thirdpage from './imagex/thirdpage.jpg';



class CarouselLanding extends Component {
  render() {
    return (
      <div>
        <Carousel fade controls={false} indicators={false}>
  <Carousel.Item interval={5000} controls={false}>
    <img
      className="d-block w-100 images"
      src={firstpage}
      alt="First slide"
    />
    <center>
        <div className="captionbody">
    <Carousel.Caption className="captiontitle">

    <h1>Unlimited movie show,
          film streaming, shows and more
      </h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     
      <Form.Group className="signinforms" controlId="formGridEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group><br/>
    <Button size="lg" variant="danger" className="starterbtn">Get Started</Button>

    </Carousel.Caption>
        </div>
    </center>

  </Carousel.Item>

  <Carousel.Item interval={5000} controls={false}>
    <img
      className="d-block w-100 images"
      src={secondpage}
      alt="First slide"
    />
    <center>
        <div className="captionbody">
    <Carousel.Caption className="captiontitle">

    <h1>Unlimited movie show,
          film streaming, shows and more
      </h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     
      <Form.Group className="signinforms" controlId="formGridEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group><br/>
    <Button size="lg" variant="danger" className="starterbtn">Get Started</Button>

    </Carousel.Caption>
        </div>
    </center>

  </Carousel.Item>

  <Carousel.Item interval={5000} controls={false}>
    <img
      className="d-block w-100 images"
      src={thirdpage}
      alt="First slide"
    />
    <center>
        <div className="captionbody">
    <Carousel.Caption className="captiontitle">

    <h1>Unlimited movie show,
          film streaming, shows and more
      </h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     
      <Form.Group className="signinforms" controlId="formGridEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group><br/>
    <Button size="lg" variant="danger" className="starterbtn">Get Started</Button>

    </Carousel.Caption>
        </div>
    </center>

  </Carousel.Item>
 
</Carousel>
      </div>
    );
  }
}


export default CarouselLanding;
