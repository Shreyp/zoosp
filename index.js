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
  welcome: console.log("Welcome to the Zoo and Friends App"),
  menu:
    console.log(" Enter (A): ------> to Add a new animal to the Zoo!")
    console.log("")
    console.log("Enter (U): ------> to Update info on an animal in the Zoo!")
    console.log("")
    console.log("Enter (V): ------> to Visit the animals in the Zoo!")
    console.log("")
    console.log("Enter (D): ------> to Adopt an animal from the Zoo!")
    console.log("")
    console.log(" Enter (Q): ------> to Quit and exit the Zoo!"),
}