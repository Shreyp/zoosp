var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    //console.log('connected as id ' + connection.threadId);
});

var prompt = require("prompt");

prompt.start();

prompt.message="";

var zoo = {
  welcome:console.log("Welcome to the Zoo and Friends App~!"),
  menu: console.log("Enter (A): ------> to Add a new animal to the Zoo!","","Enter (U): ------> to Update info on an animal in the Zoo!","","Enter (V): ------> to Visit the animals in the Zoo!","","Enter (D): ------> to Adopt an animal from the Zoo!","","Enter (Q): ------> to Quit and exit the Zoo!"),
  add:function(input_scope){
    var currentScope = input_scope;
    console.log("To add animal to the zoo, please fill out the following form for us");
    prompt.get(["->","name","type","age"], function(err,results){
      connection.query();
      currentScope.menu();
      currentScope.promptUser();
    });
  },
  visit:function(){
    console.log("Enter (I): ------> do you know the animal by it's id? We will visit that animal!");
    console.log("Enter (N): ------> do you know the animal by it's name? We will visit that animal!");
    console.log("Enter (A): ------> here's the count for all animals in all locations!");
    console.log("Enter (C): ------> here's the count for all animals in this one city!");
    console.log("Enter (O): ------> here's the count for all the animals in all locations by the type you specified!");
    console.log("Enter (Q): ------> Quits to the main menu!");
    currentScope.visit();
    currentScope.view(currentScope);
  },
};