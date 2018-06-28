import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

@inject("store")
@observer
export default class EventList extends React.Component {
  render() {
    if (this.props.events.length === 0) return <div>No results found</div>;
    return this.props.events.map(item => (
      <div key={item.id}>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <p>
                <b>{item.name}</b>
              </p>
              <p>
                <b>When?</b> {item.time} {item.date} <br />
                <b>Event Type</b> {item.event_type} <br />
                <b>Where?</b>
                {item.location}
              </p>
              <Link
                to={`/register-for-event/${item.id}`}
                className="button is-primary is-rounded"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <br />
      </div>
    ));
  }
}
