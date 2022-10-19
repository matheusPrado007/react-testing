import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o component <NotFound.js >', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/1234/');
    });

    const notFound = screen.getByRole('heading', { level: 2, name: /Page requested not found/ });
    expect(notFound).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/1234/');
    });

    const notFoundImg = screen.getByRole('img', { name: /Pikachu crying because the page requested was not found/ });
    expect(notFoundImg.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
