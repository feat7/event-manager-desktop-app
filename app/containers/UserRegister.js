// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

import { API_SERVER } from "../config";
import Navbar from "../components/Navbar";

const FormData = require("form-data");

@inject("store")
@observer
export default class UserRegister extends Component {
  state = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    file: "None"
  };
  onFileChange(e) {
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length) {
      console.log("no files");
    }
    console.log(files);
    console.log(files[0]);
    this.setState({
      file: files[0]
    });
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
                  <div className="box">
                    <div className="has-text-right has-text-danger">
                      <a onClick={() => this.props.history.goBack()}>X</a>
                    </div>
                    <div className="title">Register</div>
                    <form>
                      <div className="field">
                        <label htmlFor="name" className="label">
                          Full Name
                          <div className="control">
                            <input
                              id="name"
                              name="name"
                              className="input"
                              type="text"
                              placeholder="eg. John Doe"
                              onChange={event =>
                                this.setState({ name: event.target.value })
                              }
                              value={this.state.name}
                            />
                          </div>
                        </label>
                      </div>
                      <div className="field">
                        <label htmlFor="mobile" className="label">
                          Mobile Number
                          <div className="control">
                            <input
                              id="mobile"
                              name="mobile"
                              className="input"
                              type="text"
                              placeholder="eg. +919123456780"
                              onChange={event =>
                                this.setState({ mobile: event.target.value })
                              }
                              value={this.state.mobile}
                            />
                          </div>
                        </label>
                      </div>
                      <div className="field">
                        <label htmlFor="email" className="label">
                          Email
                          <div className="control">
                            <input
                              id="email"
                              name="email"
                              className="input"
                              type="email"
                              placeholder="eg. test@gmail.com"
                              onChange={event =>
                                this.setState({ email: event.target.value })
                              }
                              value={this.state.email}
                            />
                          </div>
                        </label>
                      </div>
                      <div className="field">
                        <label htmlFor="id_card" className="label">
                          Upload ID Card
                          <div className="control">
                            <input
                              id="id_card"
                              name="id_card"
                              className="file-input"
                              type="file"
                              onChange={this.onFileChange.bind(this)}
                            />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fas fa-upload" />
                              </span>
                              <span className="file-label">Choose a file…</span>
                            </span>
                            <span className="file-name">
                              {this.state.file !== "None"
                                ? this.state.file.name
                                : "Select file"}
                            </span>
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
                      By clicking register, you agree our terms of service
                      <div className="control has-text-right">
                        <button
                          onClick={event => {
                            event.preventDefault();
                            const formData = new FormData();

                            formData.append("name", this.state.name);
                            formData.append("mobile", this.state.mobile);
                            formData.append("email", this.state.email);

                            formData.append("id_card", this.state.file);

                            axios
                              .post(`${API_SERVER}/api-register`, formData, {
                                headers: {
                                  "Content-Type": "multipart/form-data"
                                }
                              })
                              .then(response => {
                                if (response.data.success) {
                                  this.props.store.ui.userDetails =
                                    response.data.user;
                                  return this.props.history.push("/panel");
                                }
                                throw new Error(
                                  `Not registered. info: ${JSON.stringify(
                                    response.data
                                  )}`
                                );
                              })
                              .catch(e => console.log(e.message));
                          }}
                          className="button is-primary is-rounded is-large"
                        >
                          Register
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
