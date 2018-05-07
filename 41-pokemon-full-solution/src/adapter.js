/*The adapter class has the sole responsibility of communicating with our backend. In the event that one of our endpoints changes or we want to the ability to make more requests to the backend, keeping all of that code in one place makes it easy to update and troubleshoot any issues with our requests*/
class Adapter {
  static fetchAndSetPokemon() {
    //static creates a class method that we can call without instantiating Adapter––Adapter.fetchAndSetPokemon()
    return fetch('http://localhost:3000/pokemons')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(err => console.error('Something went wrong', err));
  }

  static createNewPokemon(pokemonData) {
    //eventually pokemonData will be something the user typed into a form
    return fetch('http://localhost:3000/pokemons', {
      //because we are returning, we can call Adapter.createNewPokemon() and call .then on it elsewhere in the code
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(pokemonData),
    })
      .then(res => {
        //handle any errors
        if (res.ok) {
          return res.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(err => console.err('Failed to create new pokemon', err));
  }
}
