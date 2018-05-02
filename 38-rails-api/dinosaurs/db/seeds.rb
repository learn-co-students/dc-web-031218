pokemonJSON = File.read('db/db.json')

pokemonData = JSON.parse(pokemonJSON)

pokemonData['pokemons'].each do |pokemon|
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
