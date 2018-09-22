import React, { Component } from "react";

export default class AlbumSummary extends Component {
  render() {
    const { className, album } = this.props;

    return (
      <div className={`row ${className}`}>
        <div className="col-3">
          <img className="img-fluid" src={album.imageUrl} alt="Album Cover" />
        </div>

        <div className="col-9">
          <h2>{album.name}</h2>
        </div>
      </div>
    );
  }
}
