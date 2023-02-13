import React from 'react'
import charizad from '../assets/img/charizad.png';
import blastoise from '../assets/img/blastoise.png';
import logoPokemon from '../assets/img/pokemon-logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const pathPokemons = useNavigate();
  return (
    <section className="position-absolute top-0 start-0 min-vh-100 w-100">
      <img src={charizad} alt="Charizad" className="position-fixed pokemon-start" />
      <img src={blastoise} alt="Blastoise" className="position-fixed pokemon-end" />
      <div id="pokemon-enter" className="position-fixed start-0 end-0 top-0 bottom-0 w-75 d-flex flex-column align-items-center gap-3 m-auto">
        <img src={logoPokemon} alt="Pokemon" width="600" />
        <button onClick={() => pathPokemons('/pokemons')} className="btn btn-special rounded-pill shadow fw-bold btn-danger px-5">INGRESAR</button>
      </div>
    </section>
  )
}

export default Home