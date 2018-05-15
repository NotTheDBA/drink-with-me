use drinkwithmedb;

INSERT INTO users (email, username, `password`, createdAt, updatedAt)
values ('someuser@email.test', 'SomeUser', 'shhsecret', NOW(), NOW());

SELECT * FROM drinkwithmedb.users;