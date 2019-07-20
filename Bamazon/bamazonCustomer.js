var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
  displayInventory();
});

function displayInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    //console.log(res);
    for(var i = 0; i < res.length; i++){
      console.log("Item ID: " +res[i].item_id + " Product Name: " + res[i].product_name + " Price: $"+ res[i].price + " Stock: " + res[i].stock);
      console.log("===========================================================");
    }
    promptCustomer(res);
  });
}

var promptCustomer = function(res) {
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Please enter the Item ID of the product you would like to buy.\n",
      validate: function(value) {
        if (!isNaN(value) && value < 11) {
          return true;
        }
        return false;
      }
     },
 
     {
      type: "input",
      name: "quant",
      message: "How many units of the product would you like to buy? \n",
      validate: function(value) {
        if (!isNaN(value)) {
          return true;
        }
        return false;
       }
     }
  ]).then(function(answer){
    var userId = answer.id;
			console.log("Chosen item id: " , userId);

			var userQuant = answer.quant;
			console.log("Chosen quantity from stock: " , userQuant , "\n");

			connection.query("SELECT * FROM products WHERE ?", [{ item_id : answer.id }], function(err, res) {
				if (err) throw err;
				
				
				console.table(res);
				var current_quantity = res[0].stock;
				console.log("Current quantity in stock: " , current_quantity);
				var price = res[0].price;
				var remaining_quantity = current_quantity - answer.quant;
				console.log("Remaining quantity in stock: " , remaining_quantity);

				if(current_quantity > answer.quant) {

					console.log("Amount Remaining: " + remaining_quantity);

					connection.query("UPDATE products SET stock=? WHERE item_id=?",
                    [
                    remaining_quantity, answer.id
                    ],

					
						/*function(err, res){
							//console.table(res);
            }*/
            );

					connection.query("SELECT * FROM products", function(err, res) {

						console.log("This is the updated inventory of product items: ");
						console.log("------------------------------- \n");
						console.table(res);
					});

				} else {
					console.log("Insufficient amounts, please edit your units!");
				}

			connection.end();

			});
		})
  }

