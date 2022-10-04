import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render page App dengan benar', () => {
  render(<App />);

  const tag = screen.getByTagName('Home')
  expect(tag).toBeInTheDocument();

  const tag2 = screen.getByTagName('Users')
  expect(tag2).toBeInTheDocument();

});
