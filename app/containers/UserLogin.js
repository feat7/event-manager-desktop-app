// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

import { API_SERVER } from "../config";
import Navbar from "../components/Navbar";

const FormData = require("form-data");

@inject("store")
@observer
export default class UserLogin extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <div>
        <Navbar />
        <section className="hero is-dark is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="box">
                    <div className="has-text-right has-text-danger">
                      <a onClick={() => this.props.history.goBack()}>X</a>
                    </div>
                    <div className="title">Login</div>
                    <form>
                      <div className="field">
                        <label htmlFor="email" className="label">
                          Email
                          <div className="control">
                            <input
                              id="email"
                              name="email"
                              className="input"
                              type="email"
                              placeholder="test@gmail.com"
                              onChange={event =>
                                this.setState({ email: event.target.value })
                              }
                              value={this.state.email}
                            />
                          </div>
                        </label>
                      </div>
                      <div className="field">
                        <label htmlFor="password" className="label">
                          Password
                          <div className="control">
                            <input
                              id="password"
                              name="password"
                              className="input"
                              type="password"
                              placeholder="*****"
                              onChange={event =>
                                this.setState({ password: event.target.value })
                              }
                              value={this.state.password}
                            />
                          </div>
                        </label>
                      </div>
                      <div className="control has-text-right">
                        <button
                          onClick={event => {
                            event.preventDefault();
                            const formData = new FormData();

                            console.log(formData);
                            formData.append("email", this.state.email);
                            formData.append("password", this.state.password);

                            axios
                              .post(`${API_SERVER}/api-login`, formData)
                              .then(response => {
                                if (response.data.success) {
                                  this.props.store.ui.userDetails =
                                    response.data.user;
                                  return this.props.history.push("/panel");
                                }
                                throw new Error(
                                  `Not logged in. info: ${JSON.stringify(
                                    response.data
                                  )}`
                                );
                              })
                              .catch(e => console.log(e.message));
                          }}
                          className="button is-primary is-rounded is-large"
                        >
                          Login
                        </button>
                      </div>
                    </form>
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
