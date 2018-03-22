# Advanced SQL

## Objectives

1.  Review basic data manipulation commands
2.  Review basic table manipulation commands
3.  Practice advanced data manipulation commands

* Aggregate Functions (COUNT, SUM, MAX, MIN, AVG)
* ORDER BY

Alphabetical if text
Does uppercase or lower case take precedence?
in order if it's number
'in order' if it's a date

* LIMIT

limits the number of results

* JOIN

Foreign Key

Establishes the relationship to a row in another table
Primary key of another table
Tracks belong to albums, so tracks should have the foreign key

Tracks - each track belongs to one album
"knows" where its album is
Albums - has many tracks
"only know" where their tracks are through info on the tracks table

Left join
Inner join
Just the rows that match
With the specification that you pass in your where clause
Outer join

* GROUP BY
* HAVING

4.  Practice iteratively building queries
5.  Understand how ruby programs can use SQL
6.  Understand how to instantiate ruby objects with data from a database

## What is SQL?

Structured Query Language

Domain specific language for data storage
Used to search through your data

## What is SQL for?

To store data
search through your database to get out specific records that you need (information)

Persistence
Data that lasts

## What can we do in SQL?

### Data operations

C reate
INSERT INTO table_name(column, col) VALUES (actual values)
R ead
SELECT columns FROM table...
U pdate
UPDATE table_name SET column_name = (value) WHERE id = (some id);
D elete / destroy
DELETE FROM table_name WHERE ...

### Table operations

CREATE TABLE
creates a table
akin to creating a new 'sheet' in excel or google sheets

ALTER TABLE
changes the shape of a table

DROP TABLE
removes a table

## Why not store (album info on tracks)?

Normalization vs. Denormalization
Normalized == referring to things by ids
Denormalization == keeping lots of copies of the same data

Trade off between _writing_ and _reading_
SQL vs. NoSQL

### Disadvantages

* More data
  * Sometimes a problem
  * Usually NBD for small applications
* Single Source of truth
  * If you change the artists name, it won't change it on the track!

### Advantages

* Don't have to join
* Easier to think about reading data

### Pragmas

.tables - shows the names of the tables
.schema - shows the statements that would have been used to create the tables
...

## Exploring data

1.  Write the SQL to return all of the rows in the artists table

```SQL
SELECT * FROM artists;
```

2.  Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT name FROM artists WHERE name = "Black Sabbath";
```

3.  Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```SQL
CREATE TABLE fans(id INTEGER PRIMARY KEY, name TEXT);
```

4.  Write the SQL to alter the fans table to have a artist_id column type integer?

```SQL
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5.  Write the SQL to add yourself as a fan of the Black Eyed Peas. ArtistId **169**

```SQL
INSERT INTO fans(name, artist_id) VALUES ("Rob", 169);
```

6.  Write the SQL to return fans that are not fans of the black eyed peas.

```SQL
SELECT * FROM fans WHERE artist_id != 169;
```

-- START --

7.  Write the SQL to return the number of tracks on the album "Dark Side Of The Moon"

If we know the album id,

```SQL
SELECT COUNT(*) FROM tracks WHERE tracks.albumId = 183;
```

```SQL
SELECT COUNT(*) FROM tracks JOIN albums ON tracks.albumId = albums.albumId WHERE albums.title = "Dark Side Of The Moon";
```

8.  Write the SQL to return the last 10 artists alphabetically

```SQL
SELECT artists.name FROM artists ORDER BY artists.name LIMIT 10;
```

9.  Write the SQL to return all albums' titles and the names of their artists

```SQL
SELECT albums.title, artists.name FROM albums JOIN artists ON albums.artistId = artists.artistId;
```

10. Write the SQL to return artist name, album name and number of tracks on that album

Group by something that is unique per each row in the set of results that we want

For instance, if we want one result per album, then group by album id

if we want one result per artist, then group by artist id

```SQL
SELECT
albums.title,
artists.name,
COUNT(tracks.trackId)
FROM albums JOIN artists
ON albums.artistId = artists.artistId
JOIN tracks
ON tracks.albumId = albums.albumId
GROUP BY albums.albumId;
```

11. Write the SQL to return the names of all of the artists with any songs in the 'Pop' Genre

x genre ("Pop")
x tracks have a genre
x tracks have an album
x albums have an artist
artist (name)

```SQL
SELECT artists.name FROM genres
JOIN tracks
ON tracks.genreId = genres.genreId
JOIN albums
ON tracks.albumId = albums.albumId
JOIN artists
ON albums.artistId = artists.artistId WHERE genres.name = "Pop"
GROUP BY artists.artistId;
```

SQL ignores whitespace
" " == "\t" == "\n"
newlines, tabs, spaces all the same

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

1.  Install the SQLite Browser [here](http://sqlitebrowser.org/)
2.  Open the SQLite Browser and click 'File -> Open DataBase'
3.  Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
