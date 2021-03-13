import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Scripts from "../scripts/scripts";
import logo from "../../logo.svg";

import { GlobalConsumer } from "../../globalContext";

class Blank extends Component {
  componentWillUnmount() {
    document.getElementById("helmet-script").remove();
  }

  render() {
    return (
      <GlobalConsumer>
        {(props) => {
          const globals = props;
          return (
            <Fragment>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>You are on the blank page</p>
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
                    <Link className="App-link" to="/">
                      Home
                    </Link>
                  </p>
                </header>
              </div>
              <Scripts />
            </Fragment>
          );
        }}
      </GlobalConsumer>
    );
  }
}

export default Blank;
