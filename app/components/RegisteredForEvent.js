import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Registered = () => (
  <div>
    <Navbar />
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="box title">
            Registered Successfully for the event!
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Registered;
