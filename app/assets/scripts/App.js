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
// var Person = require('./modules/Person');
import Person from './modules/Person'; 

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes.");
    }
}

alert("TEST 12345");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "Orange");
jane.greet();

jane.payTaxes();

$("h1").remove();



