-- CreateTable
CREATE TABLE `choice` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `description` VARCHAR(150) NULL,
    `calory` BIGINT NULL,
    `carbo` BIGINT NULL,
    `protein` BIGINT NULL,
    `fat` BIGINT NULL,
    `vitamin` TEXT NULL,
    `allergic` TEXT NULL,
    `sodium` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mukburim` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `menu_id` BIGINT NOT NULL,
    `date` DATETIME(0) NULL,

    INDEX `menu_id`(`menu_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recommend_except` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `menu_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `bit` BOOLEAN NULL,

    INDEX `menu_id`(`menu_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `review_id` BIGINT NOT NULL,
    `text` VARCHAR(150) NULL,

    INDEX `review_id`(`review_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rest_image` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `rest_id` BIGINT NOT NULL,
    `link` VARCHAR(50) NULL,

    INDEX `rest_id`(`rest_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rest_menu` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `menu_id` BIGINT NOT NULL,
    `rest_id` BIGINT NOT NULL,

    INDEX `menu_id`(`menu_id`),
    INDEX `rest_id`(`rest_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `restaurant` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `location1` VARCHAR(20) NULL,
    `location2` VARCHAR(20) NULL,
    `location3` VARCHAR(20) NULL,
    `name` VARCHAR(60) NULL,
    `repre_menu` VARCHAR(50) NULL,
    `close_day` TEXT NULL,
    `start_time` VARCHAR(4) NULL,
    `end_time` VARCHAR(4) NULL,
    `address` VARCHAR(60) NULL,
    `detail_address` VARCHAR(60) NULL,
    `rating` FLOAT NULL,
    `day_open_time` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `rest_id` BIGINT NOT NULL,
    `rating` BIGINT NULL,
    `tag` TEXT NULL,
    `text` VARCHAR(900) NULL,
    `field` VARCHAR(255) NULL,

    INDEX `rest_id`(`rest_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review_image` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `review_id` BIGINT NOT NULL,
    `link` VARCHAR(50) NULL,

    INDEX `review_id`(`review_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(30) NULL,
    `phone_num` VARCHAR(21) NULL,
    `is_verified` BOOLEAN NULL,
    `nickname` VARCHAR(30) NULL,
    `body_type` ENUM('감기', '소화불량', '더위잘탐', '추위잘탐') NULL,
    `gender` ENUM('남성', '여성') NULL,
    `exercise` ENUM('다이어트 중', '중량 중', '유지 중') NULL,
    `prefer` TEXT NULL,
    `allergic` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zzim` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `rest_id` BIGINT NOT NULL,
    `created_at` DATETIME(0) NULL,

    INDEX `rest_id`(`rest_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mukburim` ADD CONSTRAINT `mukburim_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mukburim` ADD CONSTRAINT `mukburim_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `recommend_except` ADD CONSTRAINT `recommend_except_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `recommend_except` ADD CONSTRAINT `recommend_except_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_ibfk_2` FOREIGN KEY (`review_id`) REFERENCES `review`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rest_image` ADD CONSTRAINT `rest_image_ibfk_1` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rest_menu` ADD CONSTRAINT `rest_menu_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rest_menu` ADD CONSTRAINT `rest_menu_ibfk_2` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `review_image` ADD CONSTRAINT `review_image_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `review`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `zzim` ADD CONSTRAINT `zzim_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `zzim` ADD CONSTRAINT `zzim_ibfk_2` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

