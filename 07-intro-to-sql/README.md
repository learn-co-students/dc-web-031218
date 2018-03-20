# Intro to SQL

## Objectives

1. What is SQL?
2. What is SQL for?
3. How do I interact with SQL?
4. What are the basic data manipulation commands?
5. What are the basic table manipulation commands?

## What is SQL?

Structured Query Language

Domain specific language for data storage
Used to search through your data

## What is SQL for?

To store data
search through your database to get out specific records that you need (information)
Business Analytics - pivot tables - data analysis - present the data you want in a certain way
Manipulate data
Count things

Create the data itself!
Store data

## What can we do in SQL?

Data operations

C reate
R ead

* primarily SELECT
  Group By
  U pdate
  D elete

Table operation

* Changing the schema

- CREATE TABLE
  creates a table
  akin to creating a new 'sheet' in excel or google sheets

`.schema` -> column names, headers, data types
Schema == Shape
architecture of the table
How a table is made up of, consists of

Primary Key == Unique identifier
array index
row number in excel

Errors protect us from situations that don't make sense.
Is the error message for violating a type constraint meaningful? (helpful?)

## Exploring the data

1. Write the SQL to return all of the rows in the artists table

```SQL
SELECT * FROM artists;
```

same thing as

```SQL
select * from artists;
```

Capitalization does not count - but conventional & good.

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT name FROM artists WHERE name = "Black Sabbath";
```

nothing matches the condition, we get back no rows (no error)

Can you use regular expressions?
Sort of, using `LIKE`

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```SQL
CREATE TABLE fans(id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```SQL
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas. ArtistId **169**

```SQL
INSERT INTO fans(name, artist_id) VALUES ("Rob", 169);
```

6. Write the SQL to return fans that are not fans of the black eyed peas.

```SQL

```

---

8. Write the SQL to return an artist's name next to their album title

```SQL

```

9. Write the SQL to return artist name, album name and number of tracks on that album

```SQL

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```SQL

```

## BONUS

12. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have more than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```SQL

```

## Tips

.headers on
.mode columns

1. Install the SQLite Browser [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
