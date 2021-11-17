import React, { Component } from 'react';
 

import Navbarx from './component.js/Navbarx';
import CarouselLanding from './component.js/CarouselLanding';
import Firstbody from './component.js/Firstbody';
import Secondbody from './component.js/Secondbody';
import Thirdbody from './component.js/Thirdbody';
import Fourthbody from './component.js/Fourthbody';
import Fivebody from './component.js/Fivebody';

class App extends Component {
  render() {
    return (
      
      <div>
        <Navbarx />
        <CarouselLanding/>
        <Firstbody /><br/><br/>
        <Secondbody /><br/><br/><br/><br/>
        <Thirdbody /><br/><br/><br/> 
        <Fourthbody /><br/><br/><br/><br/><br/><br/>  
        <Fivebody />    
      </div>
     
    );
  }
}

export default App;


