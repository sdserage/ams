import React, { Component } from 'react';
import './App.css';
import store from '../store.js';
/* Components */
import router from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

const lighterColor = 'white'
    , lightColor = '#30BCED'
    , mediumColor = '#931621'
    , darkColor = '#545E75'
    , darkerColor = '#03191E'
    , mainFont = "'Ubuntu'"
    , theme = {
      fontFamily: mainFont,
      card: {
        titleColor: darkerColor
        //subtitleColor:
      },
      palette: {
        primary1Color1: lightColor,
        accent1Color: mediumColor
      },
      appBar: {
        color: lightColor
      }
    };

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(theme)}>

          <div className="App">
            <Router>
              <div>
              <Header/>
              {router}
              <Footer/>
              </div>
            </Router>
          </div>

      </MuiThemeProvider>
    </Provider>

    );
  }
}

export default App;
