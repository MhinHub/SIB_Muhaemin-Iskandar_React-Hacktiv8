import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import "@testing-library/jest-dom"

test('Render page App dengan benar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Mencari text tertentu
  const title = screen.getByText(/Why do we need test?/i);
  expect(title).toBeInTheDocument();

  // Mencari button tertentu
  // const buttonElement = screen.getByRole('button', { name: /User list/i });
  // expect(buttonElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('User list');

  // Klik button
  fireEvent.click(buttonElement);

  /* Mencari tombol tertentu pada halaman yang muncul karena klik tombol - pastikan memiliki role='button' */
  const buttonElement2 = screen.getByRole('button');
  expect(buttonElement2).toBeInTheDocument();
  expect(buttonElement2).toHaveTextContent('Back to Home');

});
