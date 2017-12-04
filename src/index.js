import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {unregister} from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux';
import store from './store';

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
      }
    };

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </Provider>


  , document.getElementById('root'));
unregister();
