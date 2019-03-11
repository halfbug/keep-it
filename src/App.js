import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from "react-router-dom";


const theme = createMuiTheme({
  palette: {
      type: "dark",
      primary: {
          main: '#00838e',
      },
      secondary: {
          main: '#f57f17',
      },
  },
});


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Dashboard></Dashboard>
        </MuiThemeProvider>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
