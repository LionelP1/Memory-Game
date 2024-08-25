import { useState, useEffect } from 'react';

const getPokemonData = async ({pokeId}) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const { name, sprites } = await res.json();
    const image = sprites.front_default;
    return { name, image, pokeId};
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return null;
  }
};

