use drinkwithmedb;

INSERT INTO users (email, username, passkey, createdAt, updatedAt)
values ('someuser@email.test', 'SomeUser', 'shhsecret', NOW(), NOW());

SELECT * FROM drinkwithmedb.users;