//A variable is a named storage for data

//to declare or create a variable use let keyword
let message;

//assign variable
message = "Hello";

//copying data btw 2 variables
let fruit = mango;
let vegie = fruit;
console.log(vegie); //mango;

//variable naming
//$, _ are variables
let $ = 1;
let _ = 2;
alert($ + _); //3

//reserved words
/**
 * let class, function, return
 */

//to declare or create unchanging variable use const keyword
const myBirthday = "17.09.78";

//Tasks
let admin;
let namee;

namee = "John";
admin = namee;
alert(admin);

//we use UPPERCASE for constants that are hardcoded
//ie value is known prior to execution

const BIRTHDAY = "23.8.98";
const age = (bday, tday) => {
  return tday - bday;
};
