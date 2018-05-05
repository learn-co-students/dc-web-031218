//when i call `new` Pokemon, JavaScript will look for and call the constructor function
// let id = 0; don't need this anymore
// we no longer need to dynamically generate ids for our objects because the database will provide ids for us. this way we can uniquely identify each object based on its id && run CRUD actions based on that id; Pokemon.find(params[:id])
class Pokemon {
  constructor(pokemonData) {
    this.name = pokemonData.name;
    this.height = pokemonData.height;
    this.abilities = pokemonData.abilities;
    this.id = pokemonData.id; //this id points to the id from db
    this.flipped = false;
    this.allSprites = pokemonData.sprites
    this.sprite = pokemonData.sprites.front;
    //what we did before this.id = ++id,
    Pokemon.all.push(this);
    //create our new pokemon
  }

  flipPokemon(img) {
    this.flipped = !this.flipped
    this.sprite = this.flipped ? this.allSprites.back : this.allSprites.front;
    img.src = this.sprite
  }

  render() {
    return `<div>
      <p>${this.name}</p>
      <img data-id="${this.id}" src="${this.sprite}" />
      <button data-id="${this.id}" name="flip-pokemon">FlipIt™️</button>
      </div>`;
  }
}

//Pokemon class is technically a function. A function is technically an object. THEREFORE, we can declare key/value pairs on the function object. Pokemon.all is just an array defined on the Pokemon function object
Pokemon.all = [];
