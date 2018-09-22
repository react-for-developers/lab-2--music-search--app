import React, { Component } from "react";

import Loader from "../../components/Loader";
import * as api from "../../lib/api";

export default class Playlist extends Component {
  state = {
    playlist: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadPlaylist();
  }

  loadPlaylist = () => {
    const { playlistId } = this.props.match.params;
    this.setState({
      loading: true,
      error: null
    });

    api
      .getPlaylist(playlistId)
      .then(playlist => {
        this.setState({
          playlist,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false
        });
      });
  };

  render() {
    const { playlist, loading, error } = this.state;
    return (
      <div>
        <h1>My Playlist</h1>
        {loading && <Loader />}

        {error && <p>Error: {error.message}</p>}

        <ul>
          {!loading &&
            !error &&
            playlist &&
            playlist.map(playlistItem => (
              <li className="mb-4" key={playlistItem.id}>
                <h4 className="mb-0">{playlistItem.track.name}</h4>
                <p>
                  from {playlistItem.track.album.name} by{" "}
                  {playlistItem.track.artist.name}
                </p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
