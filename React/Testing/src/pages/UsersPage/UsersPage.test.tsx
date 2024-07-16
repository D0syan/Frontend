import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { UsersPage } from './UsersPage';
import '@testing-library/jest-dom';

// Мокаем useSearchParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

describe('UsersPage', () => {
  test('calls setSearchParam with lowercase search name on input change', async () => {
    const setSearchParamMock = jest.fn();
    
    // Устанавливаем мок для useSearchParams
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      setSearchParamMock
    ]);

    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </MemoryRouter>
    );

    const searchInput = screen.getByLabelText('введите имя');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    // Используем waitFor для асинхронных обновлений
    await waitFor(() => {
      expect(setSearchParamMock).toHaveBeenCalledWith({ searchName: 'john' });
    });
  });
});
