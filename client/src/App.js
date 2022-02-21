import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePentest1 from './components/CreatePentest1';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/admin/:prjectname/pentest/new' element={<CreatePentest1 />} />
          </Routes>
        </div>
      </Router>
    );
  }
};

export default App;