Hero
  - have many superpowers
  - has many weapons
  - has one sidekick  
  
| id | name      |   
|----|-----------|  
| 1  | superman  |    
| 2  | jean grey |  
| 3  | cyclops   |

Sidekick
- belongs to superhero
- has many weapons through hero
- sidekick has many weapons through superhero
  - SELECT * from weapons where weapon.superhero_id = sidekick.superhero_id

| id | name    | hero_id |
|----|---------|---------| 
| 1  |  krypto | 1       |

Weapons/Gear
- belongs to hero
- belongs to sidekick through hero

| id  | name     | hero_id |
|-----|----------|---------| 
|  1  |  cape    | 1       |
|  3  |  glasses | 3       |

Power
 - have many superheroes who have them

| id | name       | 
|----|------------|  
| 1  | flying     |
| 2  | strength   |
| 3  | laser eyes |


Hero_Power
 - each entry represents the union of one hero and one power
 - belongs to hero
 - belongs to power
 
| id  | hero_id  | power_id |
|-----|----------|----------| 
|  1   | 1       | 1        |
|  2   | 2       | 1        |
|  3   | 1       | 4        |
|  4   | 3       | 4        |


#### Other Possible Relationships
- Villain
- Alter Ego/Disguise
- Love Interests
- Costumes
- Vehicles
- Fights
- Backstory/Origin
- Alliance/Team