-- Create the database wishes_db and specified it for use.
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table wishes.
CREATE TABLE wishes
(
    id INT NOT NULL AUTO_INCREMENT,
    wish VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);