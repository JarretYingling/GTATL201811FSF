-- Drops the favorite_db if it exists currently --
-- DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
-- CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- DROP TABLE IF EXISTS favorite_foods
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods
(
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(255) NOT NULL,
  -- Make an numeric column called "score" --
  score INT
);

-- DROP TABLE IF EXISTS favorite_songs
CREATE TABLE favorite_songs
(
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(255) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(255),
  -- Make an integer column called "score" --
  score INT
);

-- DROP TABLE IF EXISTS favorite_songs
CREATE TABLE favorite_movies
(
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(255) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN,
  -- Make an integer column called "score" --
  score INT,
  -- Set the primary key of the table to id --
  PRIMARY KEY(id),
  UNIQUE (id)
);
