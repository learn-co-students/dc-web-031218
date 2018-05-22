import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
      // sprites: { front: 'url', back: 'url'}, stats: [{name: 'hp', value: 50}]
    }
  }

  handleSubmit = e => {
    // semantic prevents default for us, thx wow
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{ name: 'hp', value: this.state.hp }],
        sprites: { front: this.state.frontUrl, back: this.state.backUrl }
      })
    })
      .then(r => r.json())
      .then(newPoke => this.props.handleNewPokemon(newPoke))
      .catch(e => console.error(e))
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  handleInputChange = e => {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Add a Pokemon!</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
            />
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
            />
            <Form.Input
              onChange={this.handleInputChange}
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
