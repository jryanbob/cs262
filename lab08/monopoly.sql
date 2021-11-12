--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Property;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50) 
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	money integer,
	peiceLocation integer
	);

CREATE TABLE Property (
	ID integer PRIMARY KEY, 
	name varchar(20) NOT NULL,
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	numHouses integer
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 1000, 23);
INSERT INTO PlayerGame VALUES (1, 2, 0.00, 500, 2);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 782, 28);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 258, 3);
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 499, 39);
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 2331, 32);
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 122, 17);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 690, 20);

INSERT INTO Property VALUES (1, 'Baltic Avenue', 1, 2, 0);
INSERT INTO Property VALUES (19, 'Ventor Avenue', 3, 3, 1);

SELECT *
FROM Game
ORDER BY time DESC;

SELECT *
FROM Game
WHERE time > CURRENT_DATE - 7;

SELECT * FROM Player WHERE name IS NOT NULL;

SELECT ID FROM Player WHERE Score > 2000;

SELECT ID
FROM Player, PlayerGame
WHERE Player.ID = PlayerGame.playerID
  AND PlayerGame.score > 2000;

SELECT *
FROM Player
WHERE Player.emailAddress LIKE '%@gmail%';
