import React from 'react';
import './App.css';
import Main from './components/MainComponent';

import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  
  render(){
    return(
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    )
  }
}

export default App;
