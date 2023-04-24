const { database } = require('../../utils/secret.utils');

const createDB = `CREATE DATABASE IF NOT EXISTS ${database}`;

const deleteDB = `DROP DATABASE IF EXISTS ${database}`;

const createUserTable =
    `CREATE TABLE customers (
    Phone VARCHAR(50) NOT NULL,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);`;

const createProductsTable =
    `CREATE TABLE all_products (
    Product_ID INT NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Cost FLOAT NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);`

const createBillsTable =
    `CREATE TABLE all_bills (
    Sl_No INT PRIMARY KEY AUTO_INCREMENT,
    Bill_No VARCHAR(50) NOT NULL,
    Phone VARCHAR(10) NOT NULL,
    Bill_Date DATE DEFAULT(CURRENT_DATE) NOT NULL,
    Product_ID VARCHAR(100) NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Cost INT NOT NULL,
    Quantity INT NOT NULL DEFAULT 1,
    Amount FLOAT AS (Cost * Quantity) NOT NULL 
  );`

module.exports = {
    createDB,
    deleteDB,
    createUserTable,
    createProductsTable,
    createBillsTable
};