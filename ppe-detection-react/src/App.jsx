import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import Detection from './pages/Detection/Detection'

export class App extends Component {
  componentDidMount(){
    document.title = "PPE DETECTION AND ALERTING";
  }

  render() {
    // React-router helps to create links for each page. 
    return (
      <Router>
        <Switch>
            <Route path="/detection" exact component={HomePage} />
            <Route path="/" exact component={Detection} />
        </Switch>
      </Router>
    );
  }
}

export default App;