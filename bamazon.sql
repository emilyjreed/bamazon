DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kitchen Aid Mixer", "Home and Kitchen", 289.99, 638);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sous Vide Cooker", "Home and Kitchen", 280.35, 427);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Fryer", "Home and Kitchen", 45.89, 498);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fitbit", "Electronics", 119.99, 375);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bluetooth Shower Speaker", "Electronics", 32.49, 458);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fujifilm Instax Mini Camera", "Electronics", 75, 189);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Health and Household", 32.65, 890);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Candles", "Health and Household", 23.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Makeup Remover Wipes", "Health and Household", 8.97, 215);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Food", "Pet Supplies", 87.99, 52);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Furminator deShedding Tool", "Pet Supplies", 29.99, 24);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Crate", "Pet Supplies", 64.99, 39);
