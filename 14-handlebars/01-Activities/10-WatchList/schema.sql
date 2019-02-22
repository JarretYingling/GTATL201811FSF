-- drop database if it already exists
DROP DATABASE IF EXISTS moviePlanner_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

-- Create the table plans.
CREATE TABLE movies
(
    id INT NOT NULL AUTO_INCREMENT,
    movie VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);