import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pokemons from './views/Pokemons'; 
import DetailPokemon from './views/DetailPokemon';
import Menu from './components/Menu';
import PokemonContext from './context/PokemonContext';

function App() {

  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  const sharedState = {
    BASE_URL
  }

  return (
    <div className="App">
      <PokemonContext.Provider value={sharedState}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemons' element={<Pokemons />} />
            <Route path='/pokemons/:idPokemon' element={<DetailPokemon />} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
