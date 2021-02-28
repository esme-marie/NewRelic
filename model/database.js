require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "victrees",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  let sql = "DROP database IF exists `victrees`;  CREATE database `victrees`;  USE `victrees`;DROP table IF exists `form`;CREATE TABLE `form` (`id` INT NOT NULL AUTO_INCREMENT,`name` varchar(50),`email` varchar(50),    `org_name` varchar(50),`org_url` varchar(50),      `message` varchar(500),PRIMARY KEY (`id`)); INSERT INTO `form`(`name`,`email`,`org_name`,`org_url`,`message`) VALUES('Jane Doe','janedoe@email.com','org_name','www.org_name.com','You are awesome, I want to be part of this!');"  

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables creation `victrees` db were successful!");

    console.log("Closing...");
  });

  con.end();
});
