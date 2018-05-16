import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }

  onAdoptPet = petId => {
    this.setState({ adoptedPets: [...this.state.adoptedPets, petId] }, () =>
      // setState accepts a second argument of a callback fn to be invoked after setState is done. Remember that setState is ASYNC
      console.log(this.state.adoptedPets)
    );
  };

  onChangeType = event => {
    this.setState({ filters: { ...this.state.filters, type: event.target.value } }, () =>
      console.log(this.state)
    );
  };

  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(r => r.json())
      .then(pets => this.setState({ pets: pets }), () => console.log(this.state));
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              {/*app passes two functions to Filters: onChangeType && fetchPets react will construct a props object for us that will look something like this:
                props: {
                  changeTypeCallback: App.onChangeType,
                  findPetsCallback: App.fetchPets
                }
                */}
              <Filters changeTypeCallback={this.onChangeType} findPetsCallback={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              {/*onAdoptPet is passed THROUGH PetBrowser to each Pet */}
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
