--SELECT * 
--FROM Game 
--ORDER BY time DESC;

--SELECT * 
--FROM Game
--WHERE time > CURRENT_DATE - 7;

--SELECT * 
--FROM Player
--WHERE name IS NOT NULL;

--SELECT playerID 
--FROM PlayerGame
--WHERE score > 2000; 

--SELECT *
--FROM Player
--WHERE emailAddress 
--LIKE '%gmail%';

--SELECT score 
--FROM PlayerGame, Player
--WHERE name LIKE 'The King'
--ORDER by score DESC;

--SELECT name
--FROM Player, PlayerGame, Game
--WHERE time = '2006-06-28 13:20:00'
--ORDER BY score DESC
--LIMIT 1
