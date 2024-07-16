import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import PlaylistPage from './Playlists';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('PlaylistPage', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ playlistId: '0' });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders playlist details when a valid playlist is available', () => {
    render(
      <MemoryRouter initialEntries={['/playlists/0']}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('PlaylistInfoPage')).toBeInTheDocument();
    expect(screen.getByText('Жанр:')).toBeInTheDocument();
    expect(screen.getByText('Rock')).toBeInTheDocument();
    expect(screen.getByText('Название:')).toBeInTheDocument();
    expect(screen.getByText('Great Rock Hits')).toBeInTheDocument();
    expect(screen.getByText('Tutti Frutti')).toBeInTheDocument();
  });

  test('navigates to genre page when genre is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/playlists/0']}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Rock'));
    expect(mockNavigate).toHaveBeenCalledWith('/playlists?genre=Rock');
  });

  test('renders not found message when an invalid playlist id is provided', () => {
    (useParams as jest.Mock).mockReturnValue({ playlistId: '999' });

    render(
      <MemoryRouter initialEntries={['/playlists/999']}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Такого плейлиста не существует')).toBeInTheDocument();
  });

  test('renders not found message when a Non Music playlist is provided', () => {
    (useParams as jest.Mock).mockReturnValue({ playlistId: '2' });

    render(
      <MemoryRouter initialEntries={['/playlists/2']}>
        <Routes>
          <Route path="/playlists/:playlistId" element={<PlaylistPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Такого плейлиста не существует')).toBeInTheDocument();
  });
});
