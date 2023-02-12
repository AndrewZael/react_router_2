import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';

export const DetailPokemon = () => {

  const { BASE_URL } = useContext(PokemonContext);
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState({});

  const getPokemon = async () => {
    const getDataPokemon = await fetch(`${BASE_URL}/${idPokemon}`);
    const dataPokemon = await getDataPokemon.json();
    return dataPokemon;
  }

  useEffect(() => {
    getPokemon().then(p => {
      console.log(p);
      setPokemon(p);
    }).catch(err => {

    });
  },[]);

  return (
    <section>
      <article className="row mx-0">
        <div className="col">
          <img 
            src={pokemon.sprites?.other.dream_world.front_default} 
            alt={pokemon.name} 
            className="w-100" />
        </div>
        <div className="col">
          <h1>{pokemon.name}</h1>
          <ul>
            {
              pokemon.stats?.map(stat => (
                <li key={stat.stat.name} className="text-capitalize">
                  {stat.stat.name}: <strong>{stat.base_stat}</strong>
                </li>
              ))
            }
          </ul>

          <h2>Tipos</h2>
          <ul>
            {
              pokemon.types?.map(t => (
                <li key={t.type.name} className="text-capitalize">{t.type.name}</li>
              ))
            }
          </ul>
        </div>
      </article>
    </section>
  )
}

export default DetailPokemon;