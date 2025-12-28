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
    `image_link` VARCHAR(191) NULL,
    `recipe_link` VARCHAR(200) NULL,
    `recipe_link_source` VARCHAR(200) NULL,
    `recipe_video_name` VARCHAR(300) NULL,

    UNIQUE INDEX `unique_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mukburim` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `menu_name` VARCHAR(30) NOT NULL,
    `date` DATETIME(0) NULL,

    INDEX `menu_id`(`menu_name`),
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
    `rest_image` VARCHAR(500) NULL,
    `location` VARCHAR(20) NULL,
    `name` VARCHAR(60) NULL,
    `address` VARCHAR(60) NULL,
    `address_jibeon` VARCHAR(50) NULL,
    `postal_code` VARCHAR(50) NULL,
    `rating` FLOAT NULL DEFAULT 0,
    `monday` VARCHAR(20) NULL DEFAULT '휴무',
    `tuesday` VARCHAR(20) NULL DEFAULT '휴뮤',
    `wednesday` VARCHAR(20) NULL DEFAULT '휴무',
    `thursday` VARCHAR(20) NULL DEFAULT '휴무',
    `friday` VARCHAR(20) NULL DEFAULT '휴무',
    `saturday` VARCHAR(20) NULL DEFAULT '휴무',
    `sunday` VARCHAR(20) NULL DEFAULT '휴무',
    `google_place_id` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `rest_id` BIGINT NOT NULL,
    `rating` BIGINT NULL,
    `tag` JSON NULL,
    `text` VARCHAR(900) NULL,
    `created_at` DATETIME(0) NULL DEFAULT (now()),
    `like` INTEGER NULL DEFAULT 0,

    INDEX `rest_id`(`rest_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review_image` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `rest_id` BIGINT NOT NULL,
    `review_id` BIGINT NOT NULL,
    `link` VARCHAR(400) NULL,

    INDEX `review_id`(`review_id`),
    INDEX `review_image_restaurant_id_fk`(`rest_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `session_id` VARCHAR(128) NOT NULL,
    `expires` INTEGER UNSIGNED NOT NULL,
    `data` TEXT NULL,

    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(30) NULL,
    `nickname` VARCHAR(30) NULL,
    `body_type` ENUM('감기', '소화불량', '더위잘탐', '추위잘탐') NULL,
    `gender` ENUM('여성', '남성') NULL,
    `exercise` ENUM('다이어트 중', '증량 중', '유지 중') NULL,
    `password` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `profileImageUrl` VARCHAR(400) NULL,

    UNIQUE INDEX `user_pk`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allergy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` BIGINT NOT NULL,
    `allergy` ENUM('달걀(난류) 알레르기', '우유 알레르기', '갑각류 알레르기', '해산물 알레르기', '견과류 알레르기') NOT NULL,

    INDEX `allergy_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prefer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` BIGINT NOT NULL,
    `prefer` ENUM('한식', '양식', '중식', '일식', '다른나라') NOT NULL,

    INDEX `prefer_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zzim` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `rest_id` BIGINT NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT (now()),

    INDEX `rest_id`(`rest_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_verification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `code` VARCHAR(10) NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expires_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email_verification_pk`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rest_tag` (
    `rest_id` BIGINT NOT NULL,
    `tag` VARCHAR(255) NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 1,

    INDEX `rest_tag_restaurant_id_fk`(`rest_id`),
    PRIMARY KEY (`tag`, `rest_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_reset_token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `expires_at` DATETIME(0) NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `password_reset_token_pk_2`(`email`),
    UNIQUE INDEX `password_reset_token_pk`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repre_menu` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `rest_id` BIGINT NOT NULL,
    `menu` VARCHAR(50) NOT NULL,

    INDEX `repre_menu_restaurant_id_fk`(`rest_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_rest` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `rest_id` BIGINT NOT NULL,

    INDEX `user_rest_restaurant_id_fk`(`rest_id`),
    INDEX `user_rest_user_id_fk`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agreement_consent` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `terms_of_service` BOOLEAN NOT NULL DEFAULT false,
    `privacy_policy` BOOLEAN NOT NULL DEFAULT false,
    `location_service` BOOLEAN NOT NULL DEFAULT false,
    `is_over14` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu_view_time` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NULL,
    `menu_name` VARCHAR(30) NULL,
    `time` DATETIME(0) NULL,

    INDEX `fk_user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu_tag` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `menu_id` BIGINT NOT NULL,
    `tag` VARCHAR(40) NOT NULL,

    INDEX `menu_id`(`menu_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mukburim` ADD CONSTRAINT `mukburim_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `recommend_except` ADD CONSTRAINT `recommend_except_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `recommend_except` ADD CONSTRAINT `recommend_except_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_ibfk_2` FOREIGN KEY (`review_id`) REFERENCES `review`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
ALTER TABLE `review_image` ADD CONSTRAINT `review_image_restaurant_id_fk` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `allergy` ADD CONSTRAINT `allergy_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `prefer` ADD CONSTRAINT `prefer_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zzim` ADD CONSTRAINT `zzim_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `zzim` ADD CONSTRAINT `zzim_ibfk_2` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rest_tag` ADD CONSTRAINT `rest_tag_restaurant_id_fk` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `repre_menu` ADD CONSTRAINT `repre_menu_restaurant_id_fk` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_rest` ADD CONSTRAINT `user_rest_restaurant_id_fk` FOREIGN KEY (`rest_id`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_rest` ADD CONSTRAINT `user_rest_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `agreement_consent` ADD CONSTRAINT `agreement_consent_user_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `menu_view_time` ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `menu_tag` ADD CONSTRAINT `menu_tag_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
