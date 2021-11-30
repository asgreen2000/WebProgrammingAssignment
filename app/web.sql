-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2021 at 04:20 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: web
--
CREATE DATABASE web 

-- --------------------------------------------------------

--
-- Table structure for table account
--

CREATE TABLE account (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  phoneNumber varchar(15) NOT NULL,
  role varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ;

-- --------------------------------------------------------

--
-- Table structure for table contact
--

CREATE TABLE contact (
  id int(11) NOT NULL,
  cName varchar(255) NOT NULL,
  email varchar(50) NOT NULL,
  phoneNumber varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table news
--

CREATE TABLE news (
  id int(11) NOT NULL,
  title varchar(255) NOT NULL,
  content mediumtext NOT NULL,
  subject varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  postTime date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table product
--

CREATE TABLE product (
  id int(11) NOT NULL,
  pName varchar(255) NOT NULL,
  src varchar(255) NOT NULL,
  srcDetail varchar(255) NOT NULL,
  price int(11) NOT NULL,
  quantity int(11) NOT NULL,
  description varchar(2000) NOT NULL,
  type varchar(255) NOT NULL,
  alt varchar(255) DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Table structure for table review
--

CREATE TABLE review (
  userID int(11) NOT NULL,
  productID int(11) NOT NULL,
  rate int(2) NOT NULL,
  comment varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table account
--
ALTER TABLE account
  ADD UNIQUE KEY username (username),
  ADD UNIQUE KEY email (email);

--
-- Indexes for table contact
--
ALTER TABLE contact
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY email (email);

--
-- Indexes for table news
--
ALTER TABLE news
  ADD PRIMARY KEY (id);

--
-- Indexes for table product
--
ALTER TABLE product
  ADD PRIMARY KEY (id);

--
-- Indexes for table review
--
ALTER TABLE review
  ADD PRIMARY KEY (userID,productID),
  ADD KEY FK_user_review_productID (productID);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table contact
--
ALTER TABLE contact
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table news
--
ALTER TABLE news
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table product
--
ALTER TABLE product
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table review
--
ALTER TABLE review
  ADD CONSTRAINT FK_user_review_productID FOREIGN KEY (productID) REFERENCES product (id) ON DELETE CASCADE,
  ADD CONSTRAINT FK_user_review_userID FOREIGN KEY (userID) REFERENCES account (id) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;