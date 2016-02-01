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
  menu:console.log("Enter (A): ------> to Add a new animal to the Zoo!"),
  add:function(input_scope){
    var currentScope = input_scope;
    console.log("To add animal to the zoo, please fill out the following form for us");
    prompt.get(["->","name","type","age"], function(err,results){
      connection.query();
      currentScope.menu();
      currentScope.promptUser();
    });
  }
};