import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';
import Components from './components/index.jsx';
import ScrollToTop from './components/helpers/scroll.js';

import { GlobalProvider } from './globalContext'


class App extends Component {
  constructor(props) {
    super(props);

    this.updateGlobalContext = ({ base_url, api_url }) => {
      this.setState({ base_url, api_url }, () => console.info(this.state));
    }

    this.state = {
      base_url: window.location.origin,
      api_url: '', // The api url
      updateGlobalContext: this.updateGlobalContext 
    }
  }

  render() {
    const globals = this.state;
    return (
      <Router>
        <ScrollToTop>
          <GlobalProvider value={globals}>
            <Components base_url={this.state.base_url} api_url={this.state.api_url} />
          </GlobalProvider>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
