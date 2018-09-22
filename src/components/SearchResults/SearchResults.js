import React, { Component } from "react";
import { Link } from "react-router-dom";

import ArtistSummary from "../ArtistSummary";

export default class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;

    if (searchResults.length === 0) {
      return <h4>No results</h4>;
    }

    return (
      <ul className="list-unstyled">
        {searchResults.map(artist => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              <ArtistSummary className="mb-4" artist={artist} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
