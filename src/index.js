 import React from 'react';
 import { render } from 'react-dom';
import Router from 'react-router-dom/BrowserRouter'
import { blueGrey500, blueGrey700, lightBlue500, deepOrange400 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './index.css';
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import { Route } from 'react-router'
 import App from './App'

const customTheme = getMuiTheme({
  fontFamily: 'Raleway, sans-serif',
  palette: {
    primary1Color: lightBlue500,
    accent1Color: deepOrange400,
    textColor: blueGrey700
  },
  checkbox: {
    checkedColor: deepOrange400,
    boxColor: blueGrey500
  },
  svgIcon: {
    color: blueGrey500
  }
})

render(
    <MuiThemeProvider>
        <div style={customTheme} >
          <Router>
            <Route path="/" component={App} />
          </Router>
      </div>
    </MuiThemeProvider>,
  document.getElementById('root')
)
