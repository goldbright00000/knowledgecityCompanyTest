/*
SQLyog Community v12.4.2 (64 bit)
MySQL - 10.4.8-MariaDB : Database - test_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `test_db`;

/*Table structure for table `api_users` */

DROP TABLE IF EXISTS `api_users`;

CREATE TABLE `api_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(50) COLLATE utf8_bin NOT NULL,
  `logged_time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `api_users` */

insert  into `api_users`(`id`,`username`,`password`,`logged_time`) values 
(1,'Roman','4297f44b13955235245b2497399d7a93','2019-11-06 14:35:31');

/*Table structure for table `students` */

DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `registered_time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `students` */

insert  into `students`(`id`,`username`,`name`,`registered_time`) values 
(1,'test2','test ','2019-11-06 15:04:18'),
(2,'test2','testj','2019-11-06 15:04:18'),
(3,'test2','dfdf','2019-11-06 15:04:18'),
(4,'test2','dfdf','2019-11-06 02:50:38'),
(5,'test2','dfd','2019-11-06 15:04:18'),
(6,'test2','dfd','2019-11-06 15:04:18'),
(7,'test2','dfd','2019-11-06 15:04:18'),
(8,'test2','dfd','2019-11-06 15:04:18'),
(9,'test2','dfd','2019-11-06 15:04:18'),
(10,'test2','dfd','2019-11-06 15:04:18'),
(11,'test2','dfdfdfd','2019-11-06 02:51:29'),
(12,'fgf','fgf','2019-11-06 03:06:05'),
(13,'fgf','f','2019-11-06 03:06:07'),
(14,'fgf','fgf','2019-11-06 03:06:09'),
(15,'fgf','fg','2019-11-06 03:06:10'),
(16,'','fgf','2019-11-06 03:06:11');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
