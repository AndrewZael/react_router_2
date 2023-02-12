import React from 'react'
import { useContext, useState, useEffect } from 'react'
import PokemonContext from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';

const Pokemons = () => {

  const { BASE_URL } = useContext(PokemonContext);
  const [idPokemon, setIdPokemon] = useState(null);
  const [listpokemons, setListPokemons] = useState([]);
  const navigate = useNavigate();

  const getListPokemons = async () => {
    const pokemonsFetch = await fetch(`${BASE_URL}?limit=100&offset=0`);
    const data = await pokemonsFetch.json();
    setListPokemons(data.results);
  }

  const getToPokemon = () => {
    navigate(`/pokemons/${idPokemon}`);
  };

  useEffect(() => {
    getListPokemons();
  },[setListPokemons]);

  return (
    <section title="Pokemons">
      <h1>Elije tu Pokemon</h1>
      <select onChange={(e) => setIdPokemon(e.target.value)} defaultValue="">
        <option value="">Seleccione un pokemon</option>
        {
          listpokemons.map(pokemon => (
            <option 
              key={pokemon.name} 
              value={pokemon.url.replace(BASE_URL, '').replace('/','').slice(0, -1)}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </option>
          ))
        }
      </select><br />
      <button onClick={() => getToPokemon()} className="btn">Ver detalle</button>
    </section>
  )
}

export default Pokemons