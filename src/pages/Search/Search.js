import React, { Component } from "react";

import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import * as api from "../../lib/api";

export default class Search extends Component {
  state = {
    searchResults: null,
    searching: false,
    error: null
  };

  handleSearch = query => {
    this.setState({
      searching: true,
      error: null
    });

    api
      .searchArtists(query)
      .then(data => {
        this.setState({
          searchResults: data,
          searching: false
        });
      })
      .catch(error => {
        this.setState({
          searching: false,
          error
        });
      });
  };

  render() {
    const { searchResults, searching, error } = this.state;

    return (
      <div>
        <SearchBar className="mb-4" onSearch={this.handleSearch} />

        {searching && <Loader />}

        {error && <p>Error: {error.message}</p>}

        <ul className="list-unstyled">
          {!searching &&
            !error &&
            searchResults && <SearchResults searchResults={searchResults} />}
        </ul>
      </div>
    );
  }
}
