var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DBUSER,
    password: process.env.DBPW,
    database: "bamazon_DB"
});

var totalPrice = 0;

connection.connect(function (err) {
    if (err) throw err;
});

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        productSearch(res);
    })
};

function productSearch(data) {
    var productList = [];
    for (var i of data) {
        var productNumber = i.item_id.toString();
        var productName = i.product_name;
        productList.push(productNumber + " " + productName);
    }
    inquirer
        .prompt([
            {
                name: "productID",
                type: "list",
                message: "What is your product ID?",
                choices: productList
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units would you like to purchase?"
            }
        ])
        .then(function (inquirerResponse) {
            var chosenID = parseInt(inquirerResponse.productID.split(" ")[0]);
            var chosenName = inquirerResponse.productID.split(" ").slice(1).join(" ");
            var chosenPrice;
            var chosenQuantity;
            for (var i of data) {
                if (i.item_id === chosenID) {
                    chosenQuantity = i.stock_quantity;
                    chosenPrice = i.price;
                }
            }
            if (inquirerResponse.quantity <= chosenQuantity) {
                console.log("\nYou have picked product " + inquirerResponse.productID);
                console.log("You have chosen to purchase " + inquirerResponse.quantity + " units of this product.\n");
                var newQuantity = chosenQuantity - inquirerResponse.quantity;
                connection.query(`UPDATE products SET stock_quantity='${newQuantity}' WHERE item_id='${chosenID}'`)
                totalPrice = totalPrice + (chosenPrice * inquirerResponse.quantity);
                inquirer
                    .prompt([
                        {
                            name: "morePurchases",
                            type: "list",
                            message: "Would you like to continue shopping?",
                            choices: ["YES", "NO"]
                        }
                    ])
                    .then(function (additionalItems) {
                        if (additionalItems.morePurchases === "YES") {
                            start();
                        }
                        else {
                            console.log("\nYour total equals: $" + totalPrice.toFixed(2));
                            console.log("Thank you for shopping with us!\n");
                        }
                    })
            }
            else {
                console.log("\nWe apologize, the number you entered exeeds the amount of product in stock");
                console.log("we have " + chosenQuantity + " of " + chosenName + " available.\n")
                start();
            }
        });
}

start();
