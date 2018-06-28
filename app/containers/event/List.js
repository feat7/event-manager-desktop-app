import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import axios from "axios";

import { API_SERVER } from "../../config";
import Navbar from "../../components/Navbar";
import EventList from "../../components/EventList";

import SearchBox from "../../components/SearchBox";

@inject("store")
@observer
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    if (!this.props.store.ui.eventsLoaded) {
      // Call API
      axios
        .get(`${API_SERVER}/api-all-events`)
        .then(response => {
          this.props.store.ui.events = response.data.events;
          console.log(response.data);
          return 1;
        })
        .catch(e => console.log(e.message));
    }
  }
  render() {
    if (!this.props.store.ui.eventsLoaded)
      return (
        <div>
          <Navbar />
          <section className="hero is-dark is-fullheight">
            <div className="hero-body">
              <div className="container">Loading...</div>
            </div>
          </section>
        </div>
      );
    return (
      <div>
        <Navbar />
        <div className="hero is-dark is-fullheight">
          <div className="hero-body">
            <div className="container">
              <SearchBox />
              <div className="content">
                <EventList events={this.props.store.ui.filteredEvents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
