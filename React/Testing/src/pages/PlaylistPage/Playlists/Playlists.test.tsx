import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Playlists from "./Playlists"
import { PLAYLISTS } from '../../../data';
import '@testing-library/jest-dom';

describe('PlaylistPage', () => {
  test('renders default text when no playlist is available', () => {
    const nonExistentPlaylistId = '999';

    render(
      <MemoryRouter initialEntries={[`/playlists/${nonExistentPlaylistId}`]}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<Playlists/>} />
        </Routes>
      </MemoryRouter>
    );

    const defaultText = screen.getByText('Такого плейлиста не существует');
    expect(defaultText).toBeInTheDocument();
  });

  test('renders playlist details when a valid playlist is available', () => {
    const validPlaylist = PLAYLISTS[0];

    render(
      <MemoryRouter initialEntries={[`/playlists/${validPlaylist.id}`]}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<Playlists />} />
        </Routes>
      </MemoryRouter>
    );

    const playlistName = screen.getByText(validPlaylist.name);
    expect(playlistName).toBeInTheDocument();
  });
});
