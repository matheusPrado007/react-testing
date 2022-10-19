import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
  it('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    const firstLink = screen.getByRole('link', { name: 'Home' });
    expect(firstLink).toBeInTheDocument();
  });

  it('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    const secondLink = screen.getByRole('link', { name: 'About' });
    expect(secondLink).toBeInTheDocument();
  });

  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const thirdLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(thirdLink).toBeInTheDocument();
  });

  it('Teste se a aplicação é redirecionada para a página inicial, na URL /', () => {
    const { history } = renderWithRouter(<App />);
    const firstLink = screen.getByRole('link', { name: 'Home' });
    expect(firstLink).toBeInTheDocument();
    userEvent.click(firstLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Teste se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);
    const secondLink = screen.getByRole('link', { name: 'About' });
    expect(secondLink).toBeInTheDocument();
    userEvent.click(secondLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const thirdLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(thirdLink).toBeInTheDocument();
    userEvent.click(thirdLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
