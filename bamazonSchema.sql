DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price DECIMAL(10,2) NULL,
stock_quantify INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantify)
VALUES 
    ("phonenix feather 11 inches", "wands", 7.2, 20), 
    ("dragon heartsting 12 inches", "wands", 7.3, 10), 
    ("gold cauldron", "cauldrons", 15.0, 2), 
    ("peweter cauldron", "cauldrons", 6.5, 25), 
    ("owl", "animals", 8.25, 12), 
    ("cat", "animals", 5.95, 0), 
    ("uniform hogwarts", "clothing", 20.0, 140), 
    ("uniform slytherin", "clothing", 20.0, 30), 
    ("uniform gryffindor", "clothing", 20.0, 30),
    ("uniform hufflepuff", "clothing", 20.0, 30), 
    ("uniform ravenclaw", "clothing", 20.0, 30);


