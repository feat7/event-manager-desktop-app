// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Navbar from "../../components/Navbar";

@inject("store")
@observer
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    if (!this.props.store.ui.isAdmin) {
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
                  <div className="title">Admin Panel</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
