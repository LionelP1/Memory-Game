import { useState, useEffect } from 'react';

const getPokemon = async ({pokeId}) => {
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


const getRandomPokemon = async () => {
  const randomNumber = Math.floor(Math.random() * 1025) + 1;
  return getPokemon({pokeId: randomNumber});
};

const getRandomPokemons = async (amount) => {
  let pokemonArray = [];
  
  while (pokemonArray.length < amount) {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const isDuplicateId = pokemonArray.find(({ id }) => id === randomId);
    if (!isDuplicateId) {
      pokemonArray.push({id: randomId});
    }
  }
  
  return await Promise.all(pokemonArray.map(({id}) => getPokemon({pokeId: id})));
};
