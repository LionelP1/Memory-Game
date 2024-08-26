import { useState, useEffect } from 'react';

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const NUM_OF_POKEMONS= 1025;

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
  
  const getRandomPokemons = async (amount) => {
    let pokemonArray = [];
    
    while (pokemonArray.length < amount) {
      const randomId = Math.floor(Math.random() * NUM_OF_POKEMONS) + 1;
      const isDuplicateId = pokemonArray.find(({ id }) => id === randomId);
      if (!isDuplicateId) {
        pokemonArray.push({id: randomId});
      }
    }
    return await Promise.all(pokemonArray.map(({id}) => getPokemon({pokeId: id})));
  };
  
  // Fisher-Yates Shuffle
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const createRandomPairs = async (amount) => {
    const pokemonArray = await getRandomPokemons(amount);
    let pokemonPairs = [...pokemonArray, ...pokemonArray];
    const randomPairs = shuffleArray(pokemonPairs);
    setPokemons(randomPairs);
    // return randomPairs;
  };
  
  return { pokemons, getRandomPokemons, createRandomPairs, setPokemons };
}












// import { useState, useEffect } from 'react';



// const getPokemon = async ({pokeId}) => {
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const { name, sprites } = await res.json();
//     const image = sprites.front_default;
//     return { name, image, pokeId};
//   } catch (error) {
//     console.error('Error fetching Pokémon data:', error);
//     return null;
//   }
// };

// const getRandomPokemons = async (amount) => {
//   let pokemonArray = [];
  
//   while (pokemonArray.length < amount) {
//     const randomId = Math.floor(Math.random() * 1025) + 1;
//     const isDuplicateId = pokemonArray.find(({ id }) => id === randomId);
//     if (!isDuplicateId) {
//       pokemonArray.push({id: randomId});
//     }
//   }
//   return await Promise.all(pokemonArray.map(({id}) => getPokemon({pokeId: id})));
// };

// // Fisher-Yates Shuffle
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// // const createRandomPairs = async (amount) => {
// //   const pokemonArray = await getRandomPokemons(amount);
// //   let pokemonPairs = [...pokemonArray, ...pokemonArray];
// //   const randomPairs = shuffleArray(pokemonPairs);
// //   return randomPairs;
// // };

// const createRandomPairs = (amount) => {
//   return getRandomPokemons(amount)
//     .then(pokemonArray => {
//       let pokemonPairs = [...pokemonArray, ...pokemonArray];
//       const randomPairs = shuffleArray(pokemonPairs);
//       return randomPairs;
//     });
// };

// export default createRandomPairs;








