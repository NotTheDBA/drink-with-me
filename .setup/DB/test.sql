SELECT `Friend`.`id`,
	`Friend`.`userId`,
	`Friend`.`friendId`,
	`Friend`.`isAccepted`,
	`Friend`.`createdAt`,
	`Friend`.`updatedAt`,
	`isFriend`.`id` AS `isFriend.id`,
	`isFriend`.`firstname` AS `isFriend.firstname`,
	`isFriend`.`lastname` AS `isFriend.lastname`,
	`isFriend`.`username` AS `isFriend.username`,
	`isFriend`.`gravatar` AS `isFriend.gravatar`,
	`isFriend`.`email` AS `isFriend.email`,
	`isFriend`.`password` AS `isFriend.password`,
	`isFriend`.`last_login` AS `isFriend.last_login`,
	`isFriend`.`status` AS `isFriend.status`,
	`isFriend`.`createdAt` AS `isFriend.createdAt`,
	`isFriend`.`updatedAt` AS `isFriend.updatedAt`,
	`isFriend - > Friend`.`id` AS `isFriend.Friend.id`,
	`isFriend - > Friend`.`userId` AS `isFriend.Friend.userId`,
	`isFriend - > Friend`.`friendId` AS `isFriend.Friend.friendId`,
	`isFriend - > Friend`.`isAccepted` AS `isFriend.Friend.isAccepted`,
	`isFriend - > Friend`.`createdAt` AS `isFriend.Friend.createdAt`,
	`isFriend - > Friend`.`updatedAt` AS `isFriend.Friend.updatedAt`
FROM `Friends` AS `Friend`
LEFT OUTER JOIN (
	`Friends` AS `isFriend - > Friend` INNER JOIN `users` AS `isFriend` ON `isFriend`.`id` = `isFriend - > Friend`.`userId`
		AND `isFriend - > Friend`.`friendId` = 2
	) ON `Friend`.`id` = `isFriend - > Friend`.`friendId`;
