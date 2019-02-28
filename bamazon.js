var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "4eKGzay9!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("Connected as id " + connection.threadId);
    start();
});

function start() {
    displayAllItems()
}

function displayAllItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw (err);
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | ʛ" + res[i].price);
        }
        askUserBuy();
    })
};

function askUserBuy() {
    inquirer.prompt([
        {
            name: "likeToBuy",
            type: "input",
            message: "What is the ID of the product you would like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        },
    ]).then(function (answer) {
        connection.query("SELECT * FROM products WHERE ?", { item_id: answer.likeToBuy }, function (err, res) {
            if (err) throw (err);
            if (answer.quantity <= res[0].stock_quantify) {
                console.log("Placing order! \n");
                updateDB(answer.likeToBuy, answer.quantity, res[0].stock_quantify, res[0].price);

            } else {
                console.log("Sorry, out of stock! \n")
            };
        })
    })
}

function updateDB(id, quantityA, currentQuantity, price) {
    console.log("Updating quantity \n");

    connection.query("UPDATE products SET ? WHERE ?",
    [
        {
            stock_quantify: (currentQuantity - quantityA)
        },
        {
            item_id: id
        }
    ],
        function (err, res) {
            if (err) throw (err);
            console.log(res.affectedRows + " products updated \n");
        }
    )
    console.log("Your total price is ʛ" + price + "\n");
    done();
}

function done() {
    connection.end();
    console.log("Connection has ended.");
}

