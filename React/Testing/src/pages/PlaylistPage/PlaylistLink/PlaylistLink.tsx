import React from 'react';
import { Link } from 'react-router-dom';
import { TPlaylist } from '../../../data/interfaces';
import "./PlaylistLink.css"

interface PlaylistLinkProps {
  playlist: TPlaylist;
}

const PlaylistLink: React.FC<PlaylistLinkProps> = ({ playlist }) => {
  if (playlist.genre === 'Non Music' && playlist.name === '' && playlist.songs.length === 0) {
    return null;
  }

  return (
      <Link className='link' to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
  );
};

export default PlaylistLink;
