import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Main from './components/Main/Main';
import FactoidsAndTools from './components/FactoidsAndTools/FactoidsAntTools';
import ProductInquiry from './components/ProductInquiry/ProductInquiry';
import ViewInquiries from './components/ViewInquiries/ViewInquiries';

export default (
  <Switch>
    <Route exact path='/'           render={()=><Main view='home'/>}/>
    <Route path='/about'            render={()=><Main view='about'/>}/>
    <Route path='/contact'          render={()=><Main view='contact'/>}/>
    <Route path='/factoidsandtools' render={()=><FactoidsAndTools view=''/>}/>
    <Route path='/productinquiry'   render={()=><ProductInquiry view=''/>}/>
    <Route path='/viewinquiries'    render={()=><ViewInquiries />}/>
  </Switch>
);
