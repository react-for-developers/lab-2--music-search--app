import React, { Component } from "react";

export default class ArtistSummary extends Component {
  render() {
    const { className, artist } = this.props;

    return (
      <div className={`row ${className}`}>
        <div className="col-4">
          <img className="img-fluid" src={artist.imageUrl} alt="Artist" />
        </div>

        <div className="col-8">
          <h1>{artist.name}</h1>
          <p>{artist.bio}</p>
        </div>
      </div>
    );
  }
}
