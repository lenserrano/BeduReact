import React from 'react';
import './App.css';
import Pokemon from './Pokemon';

class App extends React.Component {

  state = {
    next : '',
    previous:null,
    pokemon: [],
  };

  /**
   * Método que se ejecuta cuando el componente se inicializa.
   * Obtiene la primer página de Pokemon
   */
  componentDidMount() {
    this.fetchPage('https://pokeapi.co/api/v2/pokemon');
  }

  /**
   * Método que apartir de una URL obtiene la respectiva página
   * con el listado de Pokemon
   */
  async fetchPage(url) {
    console.log(url);
    const response = await fetch(url);
    const pageData = await response.json();
    this.setState({
      next: pageData.next,
      previous: pageData.previous,
    });
    this.fetchAllPokemonAtOnce(pageData.results);
  }

  /**
   * Método que apartir de una página con N Pokemons, va por la información
   * de todos al mismo tiempo y actualiza el estado
   */
  async fetchAllPokemonAtOnce(list) {
    console.log(list)
    const response = await  Promise.all(list.map(pokemonData => fetch(pokemonData.url)));
    const pokemon = await Promise.all(response.map(response => response.json()));
    this.setState({ 
        pokemon: pokemon });
  }

  render() {
    const { pokemon } = this.state;
    if(this.state.error){
      return `Error: ${this.state.error}`;
    }
    return (
      <>
        <h1>PokeDex</h1>
        <div id="poke_container" className="poke-container">
          {
            pokemon.map((data, index) => (
              <Pokemon name={data.name} types={data.types} number={data.id} />
            ))
           
          }
        
        </div>
        <div className= "buttons">
        {this.state.previous &&(
            <button className= "active btn-pokemon" onClick={()=>this.fetchPage(this.state.previous)}>Página previa</button>
        )}
        {!this.state.previous &&(
            <button className= "inactive btn-pokemon" >Página previa</button>
        )}
        {this.state.next &&(
          <button className= "active btn-pokemon" onClick={()=>this.fetchPage(this.state.next)}>Siguientes 20 Pokémon</button>
        )}
        {!this.state.next &&(
          <button className= "inactive btn-pokemon" >Siguientes 20 Pokémon</button>
        )}
          
        </div>
      </>
    );
  }
}

export default App;
