import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserInfoPage } from './UserInfoPage';
import { USERS } from '../../data';
import '@testing-library/jest-dom';


describe('UserInfoPage', () => {
  test('renders default text when user is not found', () => {
    const nonExistentUserId = USERS.length + 1;

    render(
      <MemoryRouter initialEntries={[`/users/${nonExistentUserId}`]}>
        <Routes>
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    const defaultText = screen.getByText('пользователя таким userId нет');
    expect(defaultText).toBeInTheDocument();
  });
});
