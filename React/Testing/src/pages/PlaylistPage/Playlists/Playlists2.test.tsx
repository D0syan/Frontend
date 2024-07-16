import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Playlists from './Playlists';
import { PLAYLISTS } from '../../../data';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ playlistId: '1' }),
  useNavigate: () => jest.fn(),
}));

describe('PlaylistPage', () => {
  it('отображает информацию о плейлисте, если он доступен', () => {
    const testPlaylist = PLAYLISTS.find(playlist => playlist.id === 1);

    if (!testPlaylist) {
      throw new Error('Тестовый плейлист не найден');
    }

    render(
      <MemoryRouter initialEntries={['/playlist/1']}>
        <Routes>
          <Route path="/playlist/:playlistId" element={<Playlists />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(`Жанр:`)).toBeInTheDocument();
    expect(screen.getByText(testPlaylist.genre)).toBeInTheDocument();

    expect(screen.getByText(`Название:`)).toBeInTheDocument();
    expect(screen.getByText(testPlaylist.name)).toBeInTheDocument();

    testPlaylist.songs.forEach(song => {
      expect(screen.getByText(song)).toBeInTheDocument();
    });

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(testPlaylist.songs.length);
  });
});
