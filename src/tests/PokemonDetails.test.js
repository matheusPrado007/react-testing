import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe(' Teste o componente <PokemonDetails.js />', () => {
  const moreDetail = 'More details';
  it('Teste se existe Nome do pokemon e detalhes', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const namePokemon1 = screen.getByText('Pikachu Details');
    expect(namePokemon1).toBeInTheDocument();
  });

  it('Teste se Não existi o link de navegação para os detalhes do pokémon selecionado', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const namePokemon1 = screen.getByText('Pikachu Details');
    expect(namePokemon1).toBeInTheDocument();
    expect(linkDetails).not.toBeInTheDocument();
  });

  it('Teste se a seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(summary).toBeInTheDocument();
  });

  it('A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const descriptionPoke = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(descriptionPoke).toBeInTheDocument();
  });

  it('Teste se a seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const location = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(location).toBeInTheDocument();
  });

  it('São exibidas na tela imagens de localização com o src correto', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);

    const imgLocation = screen.getAllByRole('img');

    expect(imgLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[2]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

    expect(imgLocation[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(imgLocation[2]).toHaveAttribute('alt', 'Pikachu location');
  });

  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: moreDetail });
    userEvent.click(linkDetails);
    const getLabelTxt = screen.getByLabelText('Pokémon favoritado?');
    expect(getLabelTxt).toBeInTheDocument();
  });
});
