console.log("My first js file and learning to commit on Git via terminal")

// Chapter 2 - Variable and constants
const accountId = 144553;
let accountEmail = "mohit@google.com";
var accountPassword = "12345";
accountcity = "Kolkata";
let accountState;

// accountId = 564; reassignment of const variable is not possible


accountEmail = "csad@google.com"; // we cannot reinitialized let ,
var accountPassword = "12345+";
/*
prefer not to use var because of block scope and function scope
*/
accountcity = "Kolkata";

console.table([accountEmail,accountPassword,accountcity,accountState])
/* here accountState will give undefined because of hoisting as accountState is accessed before initialization and in memeory it will initialized with undefined keyword*/

