// @flow
import React, { Component } from "react";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from "mobx-react-router";
import { Provider } from "mobx-react";
import store from "../stores";
import Routes from "../routes";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routing);

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
