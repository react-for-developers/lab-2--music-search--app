import React, { Component } from "react";
import { Link } from "react-router-dom";

import AlbumSummary from "../../components/AlbumSummary";
import TrackSummary from "../../components/TrackSummary";
import Loader from "../../components/Loader";
import * as api from "../../lib/api";

export default class Album extends Component {
  state = {
    album: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadAlbum();
  }

  loadAlbum = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { albumId } = this.props.match.params;
    api
      .getAlbum(albumId)
      .then(album => {
        this.setState({
          album,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  };

  render() {
    const { album, loading, error } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return `Error: ${error.message}`;
    }

    return (
      <React.Fragment>
        <AlbumSummary className="mb-5" album={album} />
        <h2>TRACKS:</h2>
        <ol className="list-unstyled">
          {album.tracks.map(track => (
            <li key={track.trackNumber}>
              <TrackSummary className="mb-4" track={track} />
            </li>
          ))}
        </ol>
      </React.Fragment>
    );
  }
}
