-- CreateTable
CREATE TABLE `Logins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studID` INTEGER NOT NULL,
    `lastLogin` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL,

    UNIQUE INDEX `Logins_studID_key`(`studID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
