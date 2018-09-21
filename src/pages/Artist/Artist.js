import React, { Component } from "react";
import { Link } from "react-router-dom";

import ArtistSummary from "../../components/ArtistSummary";
import AlbumSummary from "../../components/AlbumSummary";
import Loader from "../../components/Loader";
import * as api from "../../lib/api";

export default class Artist extends Component {
  state = {
    artist: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { artistId } = this.props.match.params;
    api
      .getArtist(artistId)
      .then(artist => {
        this.setState({
          artist,
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
    const { artist, loading, error } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return `Error: ${error.message}`;
    }

    return (
      <React.Fragment>
        <ArtistSummary artist={artist} />
        <h2>ALBUMS:</h2>
        {artist.albums.map(album => (
          <Link key={album.id} to={`/albums/${album.id}`}>
            <AlbumSummary className="mb-4" album={album} />
          </Link>
        ))}
      </React.Fragment>
    );
  }
}
