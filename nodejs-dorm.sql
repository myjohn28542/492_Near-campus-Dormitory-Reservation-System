-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: nodejs-dorm2.mysql.database.azure.com    Database: nodejs-dorm
-- ------------------------------------------------------
-- Server version	5.6.47.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_of_dorm`
--

DROP TABLE IF EXISTS `admin_of_dorm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_of_dorm` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) NOT NULL,
  `dorm_id` int(11) NOT NULL,
  PRIMARY KEY (`no`),
  KEY `admin_id` (`admin_id`),
  KEY `dorm_id` (`dorm_id`),
  CONSTRAINT `admin_of_dorm_ibfk_1` FOREIGN KEY (`dorm_id`) REFERENCES `dorms` (`id`),
  CONSTRAINT `admin_of_dorm_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_of_dorm`
--

LOCK TABLES `admin_of_dorm` WRITE;
/*!40000 ALTER TABLE `admin_of_dorm` DISABLE KEYS */;
INSERT INTO `admin_of_dorm` VALUES (1,1,15),(25,3,54),(26,4,14),(30,6,58);
/*!40000 ALTER TABLE `admin_of_dorm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'admin','admin@gmail.com','$2a$08$4Nq5QfpH1S74b3WDAmdD1.lPNccdDm9EaHqXDbZwZgp7iHCcZWmI.'),(3,'admin2','admin2@gmail.com','$2a$08$lwawGpxr9q4R1sCLhVTku.QSXhwHbRHIjfGr9EyDHdMmHw7tRuJaC'),(4,'admin3','admin3@gmail.com','$2a$08$2E8TEnmZCxTFUR9W5gsDhOTcbgLaXfaAIBN.ba6L6yF5sosKXFX3e'),(5,'admin4','admin4@gmail.com','$2a$08$8UJ6IfvbtIrwnmtI7QKTLeYfCeYJ4.oOx8Q.HhmX80vjaouO5jz/K'),(6,'admin1','admin1@gmail.com','$2a$08$s.lsBGR7kaIO8KXGTs3wBe5PNwgcvmx49JSCRAcZQCOg3eo37Wywe');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (1,'ต้นโมกแมนชั่น','0933802480','99 หมู่5 ');
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dorms`
--

DROP TABLE IF EXISTS `dorms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dorms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `lowPrice` float(10,2) NOT NULL,
  `highPrice` float(10,2) NOT NULL,
  `isAir` tinyint(1) NOT NULL,
  `isPet` tinyint(1) NOT NULL,
  `floor` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `lat` varchar(100) NOT NULL,
  `lng` varchar(100) NOT NULL,
  `imageUrl` varchar(500) NOT NULL,
  `imageFloorUrl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dorms`
--

LOCK TABLES `dorms` WRITE;
/*!40000 ALTER TABLE `dorms` DISABLE KEYS */;
INSERT INTO `dorms` VALUES (14,'ต้นโมกแมนชั่น','0933802475',2700.00,3500.00,1,1,3,2103,'18.786429','98.954824','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F1374306_174402576085423_1965856637_n.jpg?alt=media&token=4bc6e510-11f0-4394-86d4-83c5ac8f5cab',NULL),(15,'ปานฟ้าแมนชั่น','0903162542',2700.00,3200.00,1,0,5,1389,'18.7899392','98.9507122','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F277380b3dce0705eda3f9aab9a24f8d6.jpg?alt=media&token=4eded92f-83b8-4ce9-9a85-650a32fe1ca7','https://sv1.picz.in.th/images/2022/02/27/r5CIUJ.png'),(16,'ทูบีเพลส','0886342210',2400.00,3200.00,1,1,4,2203,'18.7877962','98.957592','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F153409_5018.jpg?alt=media&token=0c134f90-f874-486b-8a6d-5bcd1fb6cf24',NULL),(17,'ปรัชญาเพลส','0813802474',4200.00,4200.00,1,1,5,2800,'18.7820155','98.9538249','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F175739_5451.jpeg?alt=media&token=25c08566-6635-4982-a905-116a0d94ea2c',NULL),(18,'แสนฟ้าหลวง','0832792761',3000.00,3500.00,1,0,3,1348,'18.7912447','98.9537342','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F1100816015527.jpg?alt=media&token=ad2cb078-a2d6-40e2-9c94-55c4de28a364',NULL),(19,'สกายไลน์','0933543791',3700.00,3700.00,1,0,2,2183,'18.781706200391476','98.9556200740967','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F20130826214859-116.jpg?alt=media&token=a06f8857-bd27-4708-8d51-0b44a1d42250',NULL),(20,'จิตรกานต์','0948973155',2900.00,2900.00,0,0,2,1602,'18.78773967594458','98.95823791009524','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F60f69134ba1d7_5856.jpg?alt=media&token=2fd48a5a-eab8-475c-8f8c-e4cbaff3a3f1',NULL),(21,'วิมานโฮมเพลส','0876134998',5500.00,5500.00,1,1,4,2128,'18.78775999031198','98.96707847100832','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F615ac80e38383.jpg?alt=media&token=1a14eade-f656-4a98-b56f-9a25cfb25fec',NULL),(22,'สกายแกลลอรี่','0993486622',1900.00,1900.00,0,0,2,1476,'18.787922505163383','98.95115687829592','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2Fbuddy-residence_8873.jpg?alt=media&token=ddf94121-c138-4ecb-ac85-59bbe5629ced',NULL),(23,'ยูแกลลอรี่','0943189554',6500.00,6500.00,1,1,5,1162,'18.790725861665653','98.95141437036135','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2F36e216abab3a8804594fbd43bbe02d39.jpg?alt=media&token=974854b2-9a9b-455a-b0ef-b9a2d4427348',NULL),(54,'ภูตะวันเพลส','0933798510',4500.00,4500.00,1,1,2,1328,'18.790624291592657','98.95862414819338','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6ImFkbWluMiIsImVtYWlsIjoiYWRtaW4yQGdtYWlsLmNvbSIsImlhdCI6MTY0NTE5NjQ1Mn0.u6nbGWJ7cerIUcXQfB_zM9EYX-fJntQ-m0yDJP9dzG0%2F1645198519340_301822915e70ccc99bafb.jpeg?alt=media&token=cace6428-1263-48df-b6e9-123878ade8f9',NULL),(58,'ดุจเพชรแมนชั่น','0801234567',3000.00,3500.00,1,0,4,2050,'18.78276258208678','98.95431115609743','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk3NjA3NH0.x4F85b4_NXeI5wVfe4cNVA7MY52KGNymWoXtG_a0zOI%2F1645976160169_the-living-85-2.png?alt=media&token=204d5208-eaf6-4ae5-9aa9-711d15f5624d','https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk3NjA3NH0.x4F85b4_NXeI5wVfe4cNVA7MY52KGNymWoXtG_a0zOI%2F1645976200666_room2.jpg?alt=media&token=0dff7557-5e2d-446f-8d77-a3ed894e6fb6');
/*!40000 ALTER TABLE `dorms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(500) NOT NULL,
  `dorm_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (9,'https://sv1.picz.in.th/images/2022/02/22/ridlr1.jpg',18),(10,'https://sv1.picz.in.th/images/2022/02/22/ridDdy.jpg',18),(11,'https://sv1.picz.in.th/images/2022/02/22/ridAZD.jpg',18),(12,'https://sv1.picz.in.th/images/2022/02/22/ridPs9.jpg',18),(13,'https://sv1.picz.in.th/images/2022/02/22/ridC9b.jpg',18),(18,'https://sv1.picz.in.th/images/2022/02/23/riYLIv.jpg',54),(19,'https://sv1.picz.in.th/images/2022/02/23/riYJuk.jpg',54),(20,'https://sv1.picz.in.th/images/2022/02/23/riYmwE.jpg',54),(21,'https://sv1.picz.in.th/images/2022/02/23/riYyDN.jpg',54),(22,'https://sv1.picz.in.th/images/2022/02/23/riz7Yg.jpg',23),(23,'https://sv1.picz.in.th/images/2022/02/23/rizdVn.jpg',23),(24,'https://sv1.picz.in.th/images/2022/02/23/rizSRW.jpg',23),(25,'https://sv1.picz.in.th/images/2022/02/23/rizYu2.jpg',23),(26,'https://sv1.picz.in.th/images/2022/02/23/rizBDD.jpg',15),(27,'https://sv1.picz.in.th/images/2022/02/23/rizNwy.jpg',15),(28,'https://sv1.picz.in.th/images/2022/02/23/rizfL9.jpg',15),(31,'https://sv1.picz.in.th/images/2022/02/23/rizwRq.jpg',22),(32,'https://sv1.picz.in.th/images/2022/02/23/riztYa.jpg',22),(33,'https://sv1.picz.in.th/images/2022/02/23/riz16z.jpg',22),(34,'https://sv1.picz.in.th/images/2022/02/23/rizKM8.jpg',22),(35,'https://sv1.picz.in.th/images/2022/02/23/rizc1R.jpg',22),(36,'https://sv1.picz.in.th/images/2022/02/23/riziLu.jpg',20),(37,'https://sv1.picz.in.th/images/2022/02/23/rizgA0.jpg',20),(38,'https://sv1.picz.in.th/images/2022/02/23/rizxkZ.jpg',20),(39,'https://sv1.picz.in.th/images/2022/02/23/rizQEI.jpg',20),(40,'https://sv1.picz.in.th/images/2022/02/23/rizUXP.jpg',20),(41,'https://sv1.picz.in.th/images/2022/02/23/rizO6l.jpg',14),(42,'https://sv1.picz.in.th/images/2022/02/23/rizERe.jpg',14),(43,'https://sv1.picz.in.th/images/2022/02/23/rizjWk.jpg',14),(44,'https://sv1.picz.in.th/images/2022/02/23/rizl1v.jpg',14),(45,'https://sv1.picz.in.th/images/2022/02/23/rizoAE.jpg',14),(46,'https://sv1.picz.in.th/images/2022/02/23/rizsOQ.jpg',21),(47,'https://sv1.picz.in.th/images/2022/02/23/riz2aS.jpg',21),(48,'https://sv1.picz.in.th/images/2022/02/23/rizuzn.jpg',21),(49,'https://sv1.picz.in.th/images/2022/02/23/riz6xg.jpg',21),(50,'https://sv1.picz.in.th/images/2022/02/23/rizHK1.jpg',21),(51,'https://sv1.picz.in.th/images/2022/02/23/rizL4f.jpg',19),(52,'https://sv1.picz.in.th/images/2022/02/23/rizGab.jpg',19),(53,'https://sv1.picz.in.th/images/2022/02/23/rizexa.jpg',19),(54,'https://sv1.picz.in.th/images/2022/02/23/rizFdz.jpg',16),(55,'https://sv1.picz.in.th/images/2022/02/23/rizmnq.jpg',16),(56,'https://sv1.picz.in.th/images/2022/02/23/rizIK8.jpg',16),(57,'https://sv1.picz.in.th/images/2022/02/23/rizMPR.jpg',16),(58,'https://sv1.picz.in.th/images/2022/02/23/ri4Wm0.jpg',16),(59,'https://sv1.picz.in.th/images/2022/02/23/ri4SaI.jpg',17),(60,'https://sv1.picz.in.th/images/2022/02/23/ri47bZ.jpg',17),(61,'https://sv1.picz.in.th/images/2022/02/23/ri4z4P.jpg',17),(62,'https://sv1.picz.in.th/images/2022/02/23/ri44Qt.jpg',17),(63,'https://sv1.picz.in.th/images/2022/02/23/ri4Nne.jpg',17),(65,'https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk3NjA3NH0.x4F85b4_NXeI5wVfe4cNVA7MY52KGNymWoXtG_a0zOI%2F1645976797109_riYdc8.jpg?alt=media&token=0c5824d3-51e9-46e1-a6f2-4ee1a744e56a',58),(66,'https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk3NjA3NH0.x4F85b4_NXeI5wVfe4cNVA7MY52KGNymWoXtG_a0zOI%2F1645976807013_riYW7z.jpg?alt=media&token=5e4a7049-e872-4d19-abd0-3764582eb6d3',58),(67,'https://firebasestorage.googleapis.com/v0/b/dorm-dj.appspot.com/o/images%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6ImFkbWluMSIsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk3NjA3NH0.x4F85b4_NXeI5wVfe4cNVA7MY52KGNymWoXtG_a0zOI%2F1645976819342_riSI8q.jpg?alt=media&token=8b92b785-be30-4a95-a363-89b660557dc0',58);
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dorm_id` int(11) NOT NULL,
  `roomFloor` int(11) NOT NULL,
  `roomNum` varchar(100) NOT NULL,
  `price` float(10,2) NOT NULL,
  `isAir` tinyint(1) NOT NULL,
  `status` int(11) NOT NULL COMMENT '0 = available, 1 = book, 2 = not available',
  PRIMARY KEY (`id`),
  KEY `dorm_id` (`dorm_id`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`dorm_id`) REFERENCES `dorms` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (20,14,3,'310',2700.00,0,1),(21,14,3,'305',3500.00,1,0),(22,14,2,'210',3500.00,1,0),(23,14,2,'201',3500.00,1,1),(24,14,1,'102',2700.00,0,0),(25,15,2,'201',2700.00,0,0),(26,15,3,'301',3200.00,1,1),(27,23,5,'502',6500.00,1,0),(28,23,2,'207',6500.00,1,0),(29,22,1,'101',1900.00,0,0),(65,54,1,'101',4500.00,1,0),(66,54,2,'201',4500.00,1,0),(67,14,1,'101',3500.00,1,0),(68,23,4,'401',6500.00,1,0),(75,15,4,'410',3200.00,1,0),(76,15,3,'304',3200.00,1,2),(77,15,2,'207',2700.00,0,0),(78,15,4,'404',3200.00,1,0),(79,15,3,'309',3200.00,1,2),(80,15,2,'206',2700.00,0,0),(81,58,1,'101',3500.00,1,0),(82,58,2,'204',3500.00,1,0),(83,58,2,'205',3500.00,1,0),(84,58,2,'206',3500.00,1,0),(85,58,3,'301',3500.00,1,0),(86,58,3,'302',3500.00,1,0),(87,58,2,'203',3500.00,1,0),(88,58,1,'104',3500.00,1,0),(89,58,1,'102',3000.00,0,2),(90,58,1,'106',3500.00,1,0),(91,58,2,'202',3500.00,1,0),(92,58,2,'201',3500.00,1,0),(93,58,1,'105',3500.00,1,0),(94,58,1,'103',3000.00,0,2),(95,58,3,'303',3500.00,1,0),(96,58,3,'304',3500.00,1,0),(97,58,3,'306',3500.00,1,0),(98,58,4,'401',3500.00,1,0),(99,58,4,'402',3500.00,1,0),(100,58,3,'305',3500.00,1,0),(101,58,4,'403',3500.00,1,0),(102,58,4,'404',3500.00,1,0),(103,58,4,'406',3500.00,1,0),(104,58,4,'405',3500.00,1,0);
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_in_room`
--

DROP TABLE IF EXISTS `user_in_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_in_room` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `dorm_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  PRIMARY KEY (`no`),
  KEY `user_id` (`user_id`),
  KEY `dorm_id` (`dorm_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `user_in_room_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_in_room_ibfk_2` FOREIGN KEY (`dorm_id`) REFERENCES `dorms` (`id`),
  CONSTRAINT `user_in_room_ibfk_3` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_in_room`
--

LOCK TABLES `user_in_room` WRITE;
/*!40000 ALTER TABLE `user_in_room` DISABLE KEYS */;
INSERT INTO `user_in_room` VALUES (116,36,14,20),(122,30,14,23),(152,45,15,79),(153,1,58,89),(154,1,58,94),(155,44,15,76);
/*!40000 ALTER TABLE `user_in_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `line_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ผู้เช่าที่ไม่ได้อยู่ในระบบ','','','-',NULL),(29,'john','john28542@gmail.com','$2a$08$IMGp70qpGTlUHH1N.xQC1u5KR/Afisy.bnzJJW3wo8Dmjv1sRwG0u','','2'),(30,'test','test@gmail.com','$2a$08$K5KjaeIx0cllTOBoUV8UF.7VCo0lML9zObyCgybNHRYv4pl9GevPK','','1'),(31,'คิคิ','k@gmail.com','$2a$08$cNuWYNThAxrkQqJRb2kNe.s/6dN.6sXMlWh8T1/iVRQicb6sLyIAy','',NULL),(36,'MrGGG09','9@gmail.com','$2a$08$V3w5UWR2ME5nzBWY7YMgPun31ESJ.J5pL7l8uzLqGJhjK89cBKVva','0947047688',''),(38,'กนกวรรณ','kkanokwan189@gmail.com','$2a$08$KfaEMYonZlsH3aILD8vyfe11LdqoEPUdTWYzzq37x4LMIiSg.w84S','0817245350',NULL),(41,'fight','fight@fight','$2a$08$qAouLTW3PlNRs/LhDzmao.uiXg/oybBcIuBuKB8FaoxQvOE4sVvzi','0839446481',NULL),(42,'New','sirara.44@gmail.com','$2a$08$dTAfeb2/tewkxnoDrEvYUuH8lW.DxFzFIRnwvJoITfn/3gyWVjCtu','0980165042','Ud45c4a0148f129da1c301e0f07f4da32'),(44,'รชต จ๊ะราจา','mycomi20th@gmail.com','$2a$08$Urwt/05VjjnKgHoF.QAAr.Myom5zBqDsSpgbnd5B8a/rLpGfFeb4.','0952639426',NULL),(45,'ศุภชัย มาวงค์','john09@gmail.com','$2a$08$HA5oYWF.3GyVTLubIUJFSeiPNcNuLByYk0ZszR1BbolhFVy/0dCS.','0933802475','Ua5ec03e34f2bc28765229f035eeb878f');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_file`
--

DROP TABLE IF EXISTS `users_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_src` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_file`
--

LOCK TABLES `users_file` WRITE;
/*!40000 ALTER TABLE `users_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_file` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-17  9:43:44
