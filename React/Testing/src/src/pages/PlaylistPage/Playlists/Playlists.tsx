import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLAYLISTS } from '../../../data';
import { TPlaylist } from '../../../data/interfaces';
import "./Playlists.css"

const PlaylistPage: React.FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const playlist = PLAYLISTS.find(p => p.id === parseInt(playlistId || '')) as TPlaylist | undefined;
  const navigate = useNavigate();

  if (!playlist || playlist.genre === 'Non Music') {
    return <div>Такого плейлиста не существует</div>;
  }

  const handleGenreClick = () => {
    navigate(`/playlists?genre=${playlist.genre}`);
  };

  return (
    <div>
      <h2>PlaylistInfoPage</h2>
      <p>Жанр: <b onClick={handleGenreClick}>{playlist.genre}</b></p>
      <p>Название: <b>{playlist.name}</b></p>
      <ul>
        {playlist.songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistPage;
