/* 
var yudha = {
    name: "Yudha Yuki",
    favoriteColor: "yellow",
    greet: function() {
        console.log("Hello, my name is " + yudha.name + " and my favorite color is " + yudha.favoriteColor + ".");
        }
}

yudha.greet();
*/




/*
// The THIS keyword is what allows our blue print function to be flexible/recyclable
// The value of THIS changes depending on how, when and where this function is called
function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
*/
var $ = require('jquery');

var Person = require('./modules/Person');


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();



