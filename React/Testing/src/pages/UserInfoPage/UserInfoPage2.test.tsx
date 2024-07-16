import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserInfoPage } from './UserInfoPage';
import { USERS } from '../../data';
import '@testing-library/jest-dom';


describe('UserInfoPage', () => {
  test('renders user details when user exists', () => {
    const existingUser = USERS[0]; 

    render(
      <MemoryRouter initialEntries={[`/users/${existingUser.id}`]}>
        <Routes>
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );


    const emailElement = screen.getByText(existingUser.email);
    expect(emailElement).toBeInTheDocument();

    const fullNameElement = screen.getByText(existingUser.fullName);
    expect(fullNameElement).toBeInTheDocument();


    if (existingUser.playlist) {
      const playlistLinkElement = screen.getByRole('link', {
        name: existingUser.playlist.name,
      });
      expect(playlistLinkElement).toBeInTheDocument();
      expect(playlistLinkElement).toHaveAttribute(
        'href',
        `/playlists/${existingUser.playlist.id}`
      );
    }
  });
});
