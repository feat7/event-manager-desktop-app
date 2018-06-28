// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";

@inject("store")
@observer
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    if (this.props.store.ui.userDetails === null) {
      this.props.history.push("/user-login");
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="hero is-dark is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="title">User Panel</div>
                  <div className="columns">
                    <div className="column">
                      <div className="box has-text-primary title">
                        <Link to="/create-event">+ Create Event</Link>
                      </div>
                    </div>
                    <div className="column">
                      <div className="box has-text-primary title">
                        <Link to="/list-events">All Events</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
