import React, { Component } from "react";

export default class TrackSummary extends Component {
  render() {
    const { className, track } = this.props;

    const minutes = Math.floor(track.durationInSeconds / 60);
    const seconds = track.durationInSeconds % 60;

    return (
      <div className={`row ${className}`}>
        <div className="col-1">
          <h4>{track.trackNumber}</h4>
        </div>

        <div className="col-11">
          <h3>{track.name}</h3>
          <p>
            <em>
              {minutes}m{seconds}s
            </em>
          </p>
        </div>
      </div>
    );
  }
}
