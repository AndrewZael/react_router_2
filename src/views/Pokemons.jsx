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
  },[]);

  return (
    <section title="Pokemons" className="col-12 col-md-8 col-xl-6 col-xxl-5 z-1 position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column align-items-center text-center justify-content-center min-vh-100 m-auto px-4">
      <h1 className="text-capitalize fw-bold text-white mb-0 text-stroke-blue fredoka display-5 text-shadow">
      Elige tu Pokémon favorito
      </h1>
      <label className="input-group d-block w-100 mt-5 mb-4">
        <select onChange={(e) => setIdPokemon(e.target.value)} defaultValue="" className="form-select rounded-pill py-3 fw-bold text-uppercase w-100 shadow-sm text-center">
          <option value="">Selecciona tu Pokémon</option>
          {
            listpokemons.map((pokemon, i) => (
              <option 
                key={pokemon.name} 
                value={pokemon.url.replace(BASE_URL, '').replace('/','').slice(0, -1)}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </option>
            ))
          }
        </select>
      </label>
      <button onClick={() => getToPokemon()} className="btn btn-special rounded-pill shadow fw-bold btn-primary px-4 fredoka ls text-nowrap" disabled={idPokemon === null}>Ver Pokémon</button>
    </section>
  )
}

export default Pokemons