import React, { Component } from "react";

import * as api from "../../lib/api";
import { PLAYLIST_ID } from "../../constants";

export default class TrackSummary extends Component {
  state = {
    loading: false,
    error: null
  };

  addToPlaylist = () => {
    this.setState({
      loading: true,
      error: null
    });

    api
      .addTrackToPlaylist(PLAYLIST_ID, this.props.track)
      .then(() => {
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  render() {
    const { className, track } = this.props;
    const { loading, error } = this.state;

    const minutes = Math.floor(track.durationInSeconds / 60);
    const seconds = track.durationInSeconds % 60;

    return (
      <div className={`row ${className}`}>
        <div className="col-1">
          <h4>{track.trackNumber}</h4>
        </div>

        <div className="col-9">
          <h3>{track.name}</h3>
          <p>
            <em>
              {minutes}m{seconds}s
            </em>
          </p>
          {error && <p>{error.message}</p>}
        </div>

        <div className="col-2">
          <button onClick={this.addToPlaylist} disabled={loading}>
            Save to playlist
          </button>
        </div>
      </div>
    );
  }
}
