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


















// export default function ApiTest({ pokeId }) {
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const data = await getPokemonData(pokeId);
//         if (data) {
//           setPokemon(data);
//         } else {
//           setError('No Pokémon data found.');
//         }
//       } catch (err) {
//         setError('Failed to fetch Pokémon data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPokemon();
//   }, [pokeId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!pokemon) return <p>No Pokémon found.</p>;

//   return (
//     <div>
//       <h2>{pokemon.name}</h2>
//       <img src={pokemon.image} alt={pokemon.name} />
//     </div>
//   );
// }