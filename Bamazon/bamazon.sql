ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INTEGER NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #1", 50.00, 200);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #2", 55.50, 210);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #3", 45.00, 290);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #4", 35.00, 1000);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #5", 50.00, 1000);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #6", 75.00, 500);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #7", 65.00, 500);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #8", 55.00, 750);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #9", 50.00, 750);

INSERT INTO products (product_name, price, stock)
VALUES ("Product #10", 85.00, 50);

SELECT * FROM products;