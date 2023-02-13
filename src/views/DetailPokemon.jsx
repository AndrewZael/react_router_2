import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';
import preload from '../assets/img/preloader.gif';

export const DetailPokemon = () => {

  const { BASE_URL } = useContext(PokemonContext);
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState({});
  const back = useNavigate();

  const getPokemon = async () => {
    const getDataPokemon = await fetch(`${BASE_URL}/${idPokemon}`);
    const dataPokemon = await getDataPokemon.json();
    return dataPokemon;
  }

  useEffect(() => {
    getPokemon().then(p => {
      setPokemon(p);
    }).catch(err => {
      console.log(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <section className="z-1 position-absolute top-0 w-100 min-vh-100 d-flex align-items-center">
      <article className="position-relative row col-11 col-lg-10 col-xl-8 col-xxl-6 p-3 mx-auto bg-light rounded shadow-lg">

        {JSON.stringify(pokemon) === '{}' ?

        <div className="p-5 d-flex flex-column align-items-center">
          <img src={preload} alt="Pikachu caminando con celular" className="mb-3" />
          <small>Por favor espera.</small>
        </div> : 
        <>
        <button id="btn-close-back" onClick={() => back(-1)} 
        className="btn btn-danger fw-bold rounded-circle position-absolute w-auto fredoka">
          X
        </button>
        <div
        className="col-12 col-md-8 px-0 rounded border border-info overflow-hidden bg bg-auto d-flex">
          <img
            src={pokemon.sprites?.other.dream_world.front_default} 
            alt={pokemon.name} 
            className="w-100 p-4" />
        </div>
        <div className="row mx-0 col-12 col-md-4 px-0 ps-md-3 mt-4 mt-md-0 align-content-start h-100">
          <div className="col-12 col-sm-6 col-md-12 mb-4">
            <h1 className="fredoka text-capitalize text-info">{pokemon.name}</h1>
            <ul>
              {
                pokemon.stats?.map(stat => (
                  <li key={stat.stat.name} className="text-capitalize">
                    {stat.stat.name}: <strong>{stat.base_stat}</strong>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-12">
            <h2 className="fredoka text-info">Tipos</h2>
            <ul className="mt-3">
              {
                pokemon.types?.map(t => (
                  <li key={t.type.name} className="text-capitalize">{t.type.name}</li>
                ))
              }
            </ul>
          </div>
          { pokemon.types !== undefined ?
          <figure id="badge-pokemon" className="position-absolute bg-light m-0 p-0">
            <img src={require(`../assets/img/types/${pokemon.types[0].type.name}.svg`)} alt={pokemon.types !== undefined ? pokemon?.types[0]?.type?.name : 'Insignia'} className="w-100 h-100 rounded-circle border p-2 mb-1"/>
            <figcaption className="text-uppercase text-center fw-bold">{pokemon.types[0].type.name}</figcaption>
          </figure> : null
          }
        </div>
        </>
        }
      </article>
    </section>
  )
}

export default DetailPokemon;