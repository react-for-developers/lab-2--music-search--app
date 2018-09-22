import React, { Component } from "react";

import "./SearchBar.css";

export default class SearchBar extends Component {
  queryRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.queryRef.current.value);
  };

  render() {
    return (
      <form
        className={`SearchBar ${this.props.className}`}
        onSubmit={this.handleSubmit}
      >
        <div className="row">
          <div className="col-10">
            <input
              className="SearchBar__input"
              ref={this.queryRef}
              type="text"
              placeholder="Artist name"
            />
          </div>

          <div className="col-2">
            <button className="SearchBar__submit-button">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
