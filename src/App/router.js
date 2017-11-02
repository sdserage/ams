import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components
import Main from './components/Main/Main';
import FactoidsAndTools from './components/FactoidsAndTools/FactoidsAntTools';
import ProductInquiry from './components/ProductInquiry/ProductInquiry';
//import ViewInquiries from './components/ViewInquiries/ViewInquiries';

export default (
  <Router>
    <Switch>
      <Route exact path='/'           render={()=><Main view='home'/>}/>
      <Route path='/about'            render={()=><Main view='about'/>}/>
      <Route path='/contact'          render={()=><Main view='contact'/>}/>
    </Switch>
  </Router>
);
/*
<Route path='/factoidsandtools' render={()=><FactoidsAndTools view='factoids-and-tools'/>}/>
<Route path='/productinquiry'   render={()=><ProductInquiry view='product-inquiry'/>}/>
  <Route path='/viewinquiries'    render={()=><ViewInquiries />}/>
*/
