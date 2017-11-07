import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
/* Components */
import router from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header/>
          {router}
          <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
