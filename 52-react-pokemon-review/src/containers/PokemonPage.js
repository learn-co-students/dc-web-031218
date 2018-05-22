import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemonCollection: [],
    desiredPokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemonCollection =>
        this.setState({ pokemonCollection, desiredPokemon: pokemonCollection })
      )
  }

  handleSearchChange = (e, semanticObj) => {
    const filteredPokes = this.state.pokemonCollection.filter(poke =>
      poke.name.includes(semanticObj.value)
    )
    this.setState({ desiredPokemon: filteredPokes })
  }

  handleNewPokemon = newPoke => {
    this.setState({
      pokemonCollection: [...this.state.pokemonCollection, newPoke],
      desiredPokemon: [...this.state.desiredPokemon, newPoke]
    })
  }

  render() {
    return (
      <div>
        <PokemonForm handleNewPokemon={this.handleNewPokemon} />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        {this.state.pokemonCollection.length ? (
          <div>
            <h1>Pokemon Searcher</h1>
            <br />
            <br />
            <PokemonCollection pokemon={this.state.desiredPokemon} />
          </div>
        ) : (
          <h1>LOADING...</h1>
        )}
      </div>
    )
  }
}

export default PokemonPage
