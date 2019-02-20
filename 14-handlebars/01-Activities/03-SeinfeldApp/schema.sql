DROP DATABASE IF EXISTS seinfeld_db;
CREATE database seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(20) UNIQUE NOT NULL,
    coolness_points INT NOT NULL,
    attitude VARCHAR(20) NOT NULL
);

INSERT INTO actors(
    first_name, coolness_points, attitude
) VALUES
    ('Jerry', 90, 'high strung'),
    ('Elaine', 75, 'chill'),
    ('George', 30, 'dorky'),
    ('Kramer', 60, 'intense'),
    ('Newman', 15, 'evil');