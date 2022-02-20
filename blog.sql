/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.23 : Database - blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`blog` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `blog`;

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL DEFAULT '1',
  `title` varchar(255) NOT NULL,
  `article_content` text NOT NULL,
  `introduce` text NOT NULL,
  `addtime` int DEFAULT NULL,
  `view_count` int NOT NULL,
  `book_id` varchar(255) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `article` */

/*Table structure for table `berwin` */

DROP TABLE IF EXISTS `berwin`;

CREATE TABLE `berwin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userimage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `berwin` */

insert  into `berwin`(`username`,`password`,`userimage`) values 
('Berwin ','tutu5201314',NULL);

/*Table structure for table `books` */

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `books` */

insert  into `books`(`id`,`bookname`) values 
(1,'随记'),
(2,'前端工程化');

/*Table structure for table `type` */

DROP TABLE IF EXISTS `type`;

CREATE TABLE `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typename` varchar(255) NOT NULL,
  `ordernum` int NOT NULL,
  `icon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `type` */

insert  into `type`(`id`,`typename`,`ordernum`,`icon`) values 
(1,'技术博客',1,'technology'),
(2,'开源项目',2,'src'),
(3,'源码分析',3,'opensrc');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
