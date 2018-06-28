/* eslint flowtype-errors/show-errors: 0 */
import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./containers/HomePage";
import UserRegister from "./containers/UserRegister";
import UserLogin from "./containers/UserLogin";
import Panel from "./containers/Panel";
import AdminHome from "./containers/admin";
import UserHome from "./containers/user";
import CreateEvent from "./containers/event/CreateEvent";
import ListEvents from "./containers/event/List";
import RegisterForEvent from "./containers/event/RegisterForEvent";
import RegisteredForEvent from "./components/RegisteredForEvent";

export default () => (
  <div>
    <Switch>
      <Route exact path="/user-register" component={UserRegister} />
      <Route exact path="/user-login" component={UserLogin} />
      <Route exact path="/panel" component={Panel} />
      <Route exact path="/register-for-event" component={RegisterForEvent} />
      <Route exact path="/admin" component={AdminHome} />
      <Route exact path="/user" component={UserHome} />

      <Route exact path="/create-event" component={CreateEvent} />
      <Route exact path="/list-events" component={ListEvents} />
      <Route
        exact
        path="/registered-for-event"
        component={RegisteredForEvent}
      />
      <Route
        path="/register-for-event/:id"
        render={props => <RegisterForEvent {...props} />}
      />
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
);
