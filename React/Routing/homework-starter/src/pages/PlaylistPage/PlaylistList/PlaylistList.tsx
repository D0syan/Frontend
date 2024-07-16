import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PLAYLISTS } from '../../../data';
import PlaylistLink from '../PlaylistLink/PlaylistLink';
import "./PlaylistList.css"

const PlaylistList: React.FC = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const name = searchParams.get('name');
    const genre = searchParams.get('genre');

    if (name) {
      setNameFilter(name);
    }

    if (genre) {
      setGenreFilter(genre);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (nameFilter) {
      params.set('name', nameFilter);
    }

    if (genreFilter) {
      params.set('genre', genreFilter);
    }

    navigate(`?${params.toString()}`, { replace: true });
  }, [nameFilter, genreFilter, navigate]);

  const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const handleGenreFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenreFilter(event.target.value);
  };

  const filteredPlaylists = PLAYLISTS.filter(
    (playlist) =>
      playlist.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      playlist.genre.toLowerCase().includes(genreFilter.toLowerCase()) &&
      playlist.genre !== 'Non Music'
  );

  return (
    <div className="container">
      <h2>Плейлисты</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск по названию"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <input
          type="text"
          placeholder="Поиск по жанру"
          value={genreFilter}
          onChange={handleGenreFilterChange}
        />
      </div>
      <ul className="playlistList">
        {filteredPlaylists.map((playlist) => (
          <li key={playlist.id} className="playlistItem">
            <PlaylistLink playlist={playlist} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;
