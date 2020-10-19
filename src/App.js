import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';

import MasterPage from './components/MasterPage/MasterPage';

import {} from 'react-bootstrap';

class App extends Component {
  render() {
    const app = (
      <MasterPage>
        <h1>Hello World</h1>
      </MasterPage>
    );

    return (
      <div className="App">
        <BrowserRouter>
          {app}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
