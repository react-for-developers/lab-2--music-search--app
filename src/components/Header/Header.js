import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../Logo";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
    );
  }
}
