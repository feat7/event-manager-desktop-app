// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

import { API_SERVER } from "../../config";
import Navbar from "../../components/Navbar";

const FormData = require("form-data");

@inject("store")
@observer
export default class RegisterForEvent extends Component {
  state = {
    registration_type: "Self",
    no_of_tickets: 1,
    confirm: false
  };

  confirmRegistration() {
    const formData = new FormData();

    formData.append("event_id", this.props.match.params.id);
    formData.append("registration_type", this.state.registration_type);
    formData.append("no_of_tickets", this.state.no_of_tickets);

    axios
      .post(`${API_SERVER}/api-register-for-event`, formData)
      .then(response => {
        if (response.data.success) {
          return this.props.history.push("/registered-for-event");
        }
        throw new Error(
          `Failed to register for event. info: ${JSON.stringify(response.data)}`
        );
      })
      .catch(e => console.log(e.message));
  }

  showDetails() {
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
                    <div className="title">Register for the event</div>
                    <p>Your name: {this.props.store.ui.userDetails.name}</p>
                    <p>Your mobile: {this.props.store.ui.userDetails.mobile}</p>
                    <p>Your email: {this.props.store.ui.userDetails.email}</p>
                    <p>Type of Registration: {this.state.registration_type}</p>
                    <p>Number of tickets: {this.state.no_of_tickets}</p>
                    <p>Id Card</p>
                    <div>
                      <img
                        src={`${API_SERVER}/${
                          this.props.store.ui.userDetails.id_card
                        }`}
                        className="image is-128x128"
                        alt=""
                      />
                    </div>
                    By clicking register, you agree our terms of service
                    <div className="control has-text-right">
                      <button
                        className="button is-primary is-rounded is-large"
                        onClick={event => {
                          event.preventDefault();
                          this.confirmRegistration();
                        }}
                      >
                        Register
                      </button>
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

  render() {
    if (this.state.confirm) {
      return this.showDetails();
    }
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
                    <div className="title">Register for the event</div>
                    <div className="field">
                      <label htmlFor="registration_type" className="label">
                        Registration Type
                        <div className="control">
                          <div className="select">
                            <select
                              onChange={event =>
                                this.setState({
                                  registration_type: event.target.value
                                })
                              }
                              value={this.state.registration_type}
                            >
                              <option value="Self">Self</option>
                              <option value="Group">Group</option>
                              <option value="Corporate">Corporate</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label htmlFor="no_of_tickets" className="label">
                        Number Of Tickets
                        <div className="control">
                          <input
                            id="no_of_tickets"
                            className="input"
                            type="number"
                            placeholder="eg. 2"
                            onChange={event =>
                              this.setState({
                                no_of_tickets: event.target.value
                              })
                            }
                            value={this.state.no_of_tickets}
                          />
                        </div>
                      </label>
                    </div>
                    By clicking register, you agree our terms of service
                    <div className="control has-text-right">
                      <button
                        className="button is-primary is-rounded is-large"
                        onClick={event => {
                          event.preventDefault();
                          this.setState({ confirm: true });
                        }}
                      >
                        Register
                      </button>
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
