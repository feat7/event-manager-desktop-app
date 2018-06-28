// @flow
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

import { API_SERVER } from "../../config";
import Navbar from "../../components/Navbar";

const FormData = require("form-data");

@inject("store")
@observer
export default class HomePage extends Component {
  state = {
    name: "",
    date: "",
    time: "",
    event_type: "",
    location: "",
    hasErrors: false,
    errorMessage: "All fields are reqiured"
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
                    <div className="title">Create an event</div>
                    {this.state.hasErrors ? (
                      <div className="has-text-danger">
                        {this.state.errorMessage}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="field">
                      <label htmlFor="name" className="label">
                        Event Name
                        <div className="control">
                          <input
                            required
                            id="name"
                            className="input"
                            type="text"
                            placeholder="eg. Google I/O 2019"
                            onChange={event =>
                              this.setState({ name: event.target.value })
                            }
                            value={this.state.name}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label htmlFor="date" className="label">
                        Date
                        <div className="control">
                          <input
                            required
                            id="date"
                            className="input"
                            type="date"
                            onChange={event =>
                              this.setState({ date: event.target.value })
                            }
                            value={this.state.date}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label htmlFor="time" className="label">
                        Time
                        <div className="control">
                          <input
                            required
                            id="time"
                            className="input"
                            type="time"
                            onChange={event =>
                              this.setState({ time: event.target.value })
                            }
                            value={this.state.time}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label htmlFor="event_type" className="label">
                        Event Type
                        <div className="control">
                          <input
                            required
                            id="event_type"
                            className="input"
                            type="text"
                            onChange={event =>
                              this.setState({ event_type: event.target.value })
                            }
                            value={this.state.event_type}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="field">
                      <label htmlFor="location" className="label">
                        Location
                        <div className="control">
                          <input
                            required
                            id="location"
                            className="input"
                            type="text"
                            placeholder="eg. Adress/Location"
                            onChange={event =>
                              this.setState({ location: event.target.value })
                            }
                            value={this.state.location}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="control has-text-right">
                      <button
                        className="button is-primary is-rounded is-large"
                        onClick={event => {
                          this.setState({ hasErrors: false });
                          event.preventDefault();
                          if (
                            this.state.name === "" ||
                            this.state.date === "" ||
                            this.state.time === "" ||
                            this.state.event_type === "" ||
                            this.state.location === ""
                          ) {
                            console.log(this.state);
                            this.setState({ hasErrors: true });
                            return false;
                          }
                          const formData = new FormData();

                          formData.append("name", this.state.name);
                          formData.append("date", this.state.date);
                          formData.append("time", this.state.time);
                          formData.append("event_type", this.state.event_type);
                          formData.append("location", this.state.location);

                          axios
                            .post(`${API_SERVER}/api-create-event`, formData)
                            .then(response => {
                              if (response.data.success) {
                                return this.props.history.goBack();
                              }
                              this.setState({
                                hasErrors: true,
                                errorMessage: response.data.message
                              });
                              throw new Error(
                                `Failed to create event. info: ${JSON.stringify(
                                  response.data
                                )}`
                              );
                            })
                            .catch(e => console.log(e.message));
                        }}
                      >
                        Create Event
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
