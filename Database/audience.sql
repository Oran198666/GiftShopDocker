CREATE DATABASE  IF NOT EXISTS `giftshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `giftshop`;
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: giftshop
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `gifts`
--

DROP TABLE IF EXISTS `gifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gifts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `audienceId` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `price` decimal(6,2) NOT NULL DEFAULT '0.00',
  `discount` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_Gifts_TargetAudiences` (`audienceId`),
  CONSTRAINT `FK_Gifts_TargetAudiences` FOREIGN KEY (`audienceId`) REFERENCES `targetaudiences` (`targetAudienceCode`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gifts`
--

LOCK TABLES `gifts` WRITE;
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT INTO `gifts` VALUES (1,1,'Personalized Photo Album','Custom leather-bound scrapbook photo album for capturing memorable moments.',34.99,10),(2,1,'Gourmet Chocolate Gift Box','Assorted luxury handcrafted Belgian dark and milk chocolates in a ribbon box.',29.50,0),(3,1,'Aromatherapy Scented Candle Set','Set of 4 natural soy wax candles with relaxing lavender and vanilla essential oils.',24.99,15),(4,2,'Monogrammed Leather Wallet','Genuine full-grain slim bifold wallet custom engraved with initials.',45.00,5),(5,2,'Custom Star Map Frame','Night sky map poster showing the exact alignment of stars on a special date.',39.95,20),(6,2,'Luxury Bath Bomb Gift Set','8 organic essential oil bath bombs for ultimate home spa relaxation.',19.99,10),(7,3,'Engraved Wooden Music Box','Vintage wind-up wooden box playing classic melodies with personalized laser engraving.',22.50,NULL),(8,3,'Handcrafted Ceramic Mug','Unique artisan-made stoneware coffee mug with ergonomic handle design.',18.00,0),(9,3,'Tea Sampler Gift Basket','Curated selection of 12 loose leaf organic teas with a stainless steel infuser.',32.99,12),(10,4,'Crystal Wine Glass Set','Set of 4 hand-blown lead-free crystal stemware glasses in a protective gift box.',59.95,15);
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `targetaudiences`
--

DROP TABLE IF EXISTS `targetaudiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `targetaudiences` (
  `targetAudienceCode` int NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`targetAudienceCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `targetaudiences`
--

LOCK TABLES `targetaudiences` WRITE;
/*!40000 ALTER TABLE `targetaudiences` DISABLE KEYS */;
INSERT INTO `targetaudiences` VALUES (1,'Kids'),(2,'Teens'),(3,'Adults'),(4,'General');
/*!40000 ALTER TABLE `targetaudiences` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-05 12:30:09
