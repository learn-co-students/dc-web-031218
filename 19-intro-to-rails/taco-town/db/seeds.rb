
r = Restaurant.create(name: "District Taco")
t = Taco.create(name: "The Destroyer", num_ingredients: 90, restaurant_id: r.id)
