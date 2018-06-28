// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

@inject("store")
@observer
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="hero is-dark is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <Link to="/register-for-event">
                    <div className="box has-text-primary title">
                      I want to register for the event
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/user-register">
                    <div className="box has-text-primary title">
                      User Register
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/user-login">
                    <div className="box has-text-primary title">User Login</div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/admin">
                    <div className="box has-text-primary title">
                      Admin Panel
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/user">
                    <div className="box has-text-primary title">User Panel</div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/create-event">
                    <div className="box has-text-primary title">
                      Create Event
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
