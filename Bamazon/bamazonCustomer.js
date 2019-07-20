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



var promptCustomer = function(res){
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "Enter product name:"
  }]).then(function(answer){
    var correct = false;
    for(var i=0; i < res.length; i++){
      if(res[i].product_name === answer.choice){
        correct = true;
        var product = answer.choice;
        var id=i;
        inquirer.prompt({
          type: "input",
          name: "quant",
          message: "How many would you like to buy?",
          validate: function(value){
            if(isNaN(value) === false){
              return true;
            } else {
              return false;
            }
          }
        }).then(function(answer){
          console.log(res[id].stock);
          console.log(answer.quant);
      
          if((res[id].stock - answer.quant)>0){
            connection.query("UPDATE products SET stock=" + (res[id].stock-answer.quant)+ 
              "WHERE product_name=" + product+ "'", function(err, res2){
                console.log("Product Bought!");
                displayInventory();
              }) 
          } else {
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
          
        })
      }
    }
  })
}