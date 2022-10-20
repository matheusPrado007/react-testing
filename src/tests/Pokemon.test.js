import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const moreDetail = 'More details';
  it('Teste se o nome, tipo, peso, e imagem aparece na tela', () => {
    renderWithRouter(<App />);
    const namePokemon1 = screen.getByText('Pikachu');
    const weight1 = screen.getByText('Average weight: 6.0 kg');
    const pokemonAlt = screen.getByAltText(/Pikachu sprite/i);
    const typePokemon = screen.getAllByTestId('pokemon-type');
    console.log(typePokemon[0]);

    expect(typePokemon[0]).toHaveTextContent('Electric');
    expect(pokemonAlt.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(namePokemon1).toBeInTheDocument();
    expect(weight1).toBeInTheDocument();

    const next = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(next);
    expect(typePokemon[0]).toHaveTextContent('Fire');
  });
  it('Teste se tem um link de navegação eque redireciona para detail pokemon', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const namePokemon1 = screen.getByText('Pikachu Details');
    expect(namePokemon1).toBeInTheDocument();

    const inputFavorite = screen.getByRole('checkbox');
    userEvent.click(inputFavorite);
    expect(inputFavorite).toBeChecked();

    const imgPoke1 = screen.getByAltText('Pikachu is marked as favorite');
    expect(imgPoke1.src).toContain('/star-icon.svg');
  });
});
