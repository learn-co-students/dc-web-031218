import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import uuid from 'uuid'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(p => <PokemonCard key={p.id} pokemon={p} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
