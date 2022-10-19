import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<App />);
    const linkFavoritePokemon = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(linkFavoritePokemon);

    const aboutPokedex = screen.getByText('No favorite pokemon found');
    expect(aboutPokedex).toBeInTheDocument();
  });

  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const getFirePokemon = screen.getByRole('button', { name: 'Fire' });
    expect(getFirePokemon).toBeInTheDocument();
    userEvent.click(getFirePokemon);

    const moreDetailsHome = screen.getByRole('link', { name: 'More details' });
    expect(moreDetailsHome).toBeInTheDocument();
    userEvent.click(moreDetailsHome);

    const inputFavorite = screen.getByRole('checkbox');
    userEvent.click(inputFavorite);
    expect(inputFavorite).toBeChecked();

    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorite).toBeInTheDocument();

    userEvent.click(linkFavorite);

    const imgFavoritePokemon = screen.getByRole('link', { name: 'More details' });
    expect(imgFavoritePokemon).toBeInTheDocument();
  });
});
