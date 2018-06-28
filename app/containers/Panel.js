import React from "react";
import { inject } from "mobx-react";

@inject("store")
export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.store.ui.isAdmin) {
      this.props.history.push("/admin");
    } else this.props.history.push("/user");
  }

  render() {
    return <div>You will be taken away to dashboard in a while...</div>;
  }
}
