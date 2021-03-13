import React, { Component, Fragment } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import Scripts from "../scripts/scripts";
import logo from "../../logo.svg";

import GlobalContext from '../../globalContext';

class Home extends Component {
  static contextType = GlobalContext

  componentWillUnmount() {
    document.getElementById('helmet-script').remove();
  }

  render() {
    const globals = this.context;
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>You are on the home page</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); globals.updateGlobalContext({base_url: Math.random(), api_url: Math.random()})}}
            >
              Update ContextApi (console.logged)
            </a>
            <p>
              <Link className="App-link" to="/blank">
                Blank
              </Link>
            </p>
          </header>
        </div>
        <Scripts />
      </Fragment>
    );
  }
}

export default Home;
