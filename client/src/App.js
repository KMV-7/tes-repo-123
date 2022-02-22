import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateFinding from './components/CreateFinding';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/admin/pentest/new' element={<CreateFinding />} />
          </Routes>
        </div>
      </Router>
    );
  }
};

export default App;