# Advanced SQL

## Objectives

1. Review basic data manipulation commands
2. Review basic table manipulation commands
3. Practice advanced data manipulation commands

* Aggregate Functions (COUNT, SUM, MAX, MIN, AVG)
* ORDER BY
* LIMIT
* JOIN
* GROUP BY
* HAVING

4. Practice iteratively building queries
5. Understand how ruby programs can use SQL
6. Understand how to instantiate ruby objects with data from a database

## What is SQL?

Structured Query Language

Domain specific language for data storage
Used to search through your data

## What is SQL for?

To store data
search through your database to get out specific records that you need (information)

## What can we do in SQL?

Data operations

C reate
R ead
U pdate
D elete

Table operations

CREATE TABLE
creates a table
akin to creating a new 'sheet' in excel or google sheets

ALTER TABLE
changes the shape of a table

.tables - shows the names of the tables
.schema - shows the statements that would have been used to create the tables

## Exploring data

1. Write the SQL to return all of the rows in the artists table

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT name FROM artists WHERE name = "Black Sabbath";
```

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
SELECT * FROM fans WHERE artist_id != 169;
```

-- START --

7. Write the SQL to return the number of tracks on the album "Dark Side Of The Moon"

```SQL

```

8. Write the SQL to return the last 10 artists alphabetically

```SQL

```

9. Write the SQL to return all albums' titles and the names of their artists

```SQL

```

10. Write the SQL to return artist name, album name and number of tracks on that album

```SQL

```

11. Write the SQL to return the names of all of the artists with any songs in the 'Pop' Genre

```SQL

```

12. Write the SQL to return

* the names of the artists
* and their number of rock tracks
* who play Rock music
* and have more than 30 total tracks
* in order of the number of rock tracks that they have
* from greatest to least

```SQL

```

## How can we execute SQL queries from ruby?

## How can we instantiate ruby objects with data from a SQL database?

## Tips

.headers on
.mode columns

1. Install the SQLite Browser [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
