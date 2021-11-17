import React, { Component } from 'react';


 import { Row, Col, Container, Card, Button } from 'react-bootstrap';
 import Navbarx from './Navbarx';
 import Fivebody from './Fivebody';
 import Firstbody from './Firstbody';
 



class Pricing extends Component {
  render() {

    return (
      <div >
          <Navbarx />
          
          <Firstbody /><br/><br/><br/><br/>
          <Container>
            <div >
            <div  className="pricingbody" >
            <h1 style={{color:'white',}}>Pricing</h1><hr  style={{color:'red',width:280,height:6,borderRadius:5,}}/>
            <p style={{color:'white',}}>Nulla vitae elit libero, a pharetra augue mollis interdum.a pharetra augue mollis interdum.</p>
            </div> 
          <Row className="pricingbody"><br/><br/>
         
            <Col md={4} sm={12}>
               <div className="cardx">
               <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:6,borderColor:'whitesmoke', }}>
                 <br/><center><h1 className="cardpricebodyh1">Gold</h1></center><hr/>
                 <ul>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>       
                </ul>
                <Button style={{margin:7,}} variant="outline-danger" size="lg" >{" "}Buy{" "}</Button> 
               </Card>
               </div>
            </Col><br/>
           
    
           <Col md={4} sm={12}>
           <div className="cardx">
               <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:6,borderColor:'whitesmoke', }}>
                 <br/><center><h1 className="cardpricebodyh1">Silver</h1></center><hr/>
                 <ul>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>       
                </ul>
                <Button style={{margin:7,}} variant="outline-danger" size="lg" >{" "}Buy{" "}</Button>
               
               </Card>
               </div>
               
           </Col><br/>

           <Col md={4} sm={12}>
           <div className="cardx">
               <Card style={{ width: 'auto',backgroundColor:'black',color:'white',borderRadius:6,borderColor:'whitesmoke', }}>
                 <br/><center><h1 className="cardpricebodyh1">Bronze</h1></center><hr/>
                 <ul>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>
                  <li>vitae elit libero, a pharetra augue mollis interdum</li>       
                </ul>
                <Button style={{margin:7,}} variant="outline-danger" size="lg" >{" "}Buy{" "}</Button>
               </Card>
               </div>
               </Col>
               </Row>
               </div>
         
         </Container><br/><br/><br/>
         
           <div>
         <Fivebody />
           </div> 
       
      </div>
    );
  }
}


export default Pricing;