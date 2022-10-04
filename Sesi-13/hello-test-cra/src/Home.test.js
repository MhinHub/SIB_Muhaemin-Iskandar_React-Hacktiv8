import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('Render page Home dengan benar', () => {
    render(<Home />);

    // Mencari text tertentu
    const title = screen.getByText(/Why do we need test?/i);
    expect(title).toBeInTheDocument();

    // Mencari button tertentu
    const buttonElement = screen.getByRole('button', { name: /User list/i });
    expect(buttonElement).toBeInTheDocument();
    //   const buttonElement = screen.getByRole('button');
    //   expect(buttonElement).toBeInTheDocument();
    //   expect(buttonElement).toHaveTextContent('User list');


    // Klik button
    buttonElement.click();
    /* Mencari tombol tertentu pada halaman yang muncul karena klik tombol - pastikan memiliki role='button' */
    const buttonElement2 = screen.getByRole('button');
    expect(buttonElement2).toBeInTheDocument();
    expect(buttonElement2).toHaveTextContent('Back to Home');

});
