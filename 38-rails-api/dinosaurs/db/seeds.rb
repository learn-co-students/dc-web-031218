# fetching to fake json server to seed data
pokemonJSON = RestClient.get('http://localhost:3000/pokemons')

pokemonData = JSON.parse(pokemonJSON)

pokemonData.each do |pokemon|
  dino_attributes = {
    name: pokemon['name'],
    height: pokemon['height'],
    weight: pokemon['weight'],
    pokedex_order: pokemon['order'],
    front_sprite: pokemon['sprites']['front'],
    back_sprite: pokemon['sprites']['back']
  }
  d = Dinosaur.create(dino_attributes)
  abilities = pokemon['abilities'].map { |ab| Ability.find_or_create_by(name: ab) }
  moves = pokemon['moves'].map { |mv| Move.find_or_create_by(name: mv) }
  types = pokemon['types'].map { |tp| Type.find_or_create_by(name: tp) }
  d.abilities << abilities
  d.moves << moves
  d.types << types
end
