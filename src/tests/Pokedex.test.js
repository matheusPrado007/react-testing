import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  const proximoPokemon = 'Próximo pokémon';
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const h2Txt = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(h2Txt).toBeInTheDocument();

    const btnNextPokemon = screen.getByRole('button', { name: proximoPokemon });
    expect(btnNextPokemon).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
  });
  it('Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado:', () => {
    renderWithRouter(<App />);

    const btnNextPokemon = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(btnNextPokemon).toBeInTheDocument();

    userEvent.click(btnNextPokemon);
  });
  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);

    const btnFilterPokemon = screen.getAllByTestId('pokemon-type-button');
    expect(btnFilterPokemon).toBeDefined();

    const btnElectric = screen.getByRole('button', { name: 'Electric' });
    userEvent.click(btnElectric);
    const btnNextPokemon = screen.getByRole('button', { name: proximoPokemon });
    userEvent.click(btnNextPokemon);

    const btnFire = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(btnFire);
    userEvent.click(btnNextPokemon);

    const btnBug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(btnBug);
    userEvent.click(btnNextPokemon);

    const btnPoison = screen.getByRole('button', { name: 'Poison' });
    userEvent.click(btnPoison);
    userEvent.click(btnNextPokemon);

    const btnPsychic = screen.getByRole('button', { name: 'Psychic' });
    userEvent.click(btnPsychic);
    userEvent.click(btnNextPokemon);

    const btnNormal = screen.getByRole('button', { name: 'Normal' });
    userEvent.click(btnNormal);
    userEvent.click(btnNextPokemon);

    const btnDragon = screen.getByRole('button', { name: 'Dragon' });
    userEvent.click(btnDragon);
    userEvent.click(btnNextPokemon);
  });

  it('Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado:', () => {
    renderWithRouter(<App />);
    const btnNextPokemon = screen.getByRole('button', { name: proximoPokemon });
    const btnAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(btnAll);
    userEvent.click(btnNextPokemon);
  });
});
