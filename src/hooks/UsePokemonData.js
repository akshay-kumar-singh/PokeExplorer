import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePokemonData = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const pokemonData = await Promise.all(
          res.data.results.map(async (pokemon) => {
            const detail = await axios.get(pokemon.url);
            return {
              id: detail.data.id,
              name: detail.data.name,
              image: detail.data.sprites.front_default,
              types: detail.data.types.map(t => t.type.name)
            };
          })
        );
        setPokemons(pokemonData);
      } catch (err) {
        setError("Failed to load Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
};
