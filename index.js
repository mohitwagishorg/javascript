// console.log("My first js file and learning to commit on Git via terminal")

// Chapter 2 - Variable and constants
// const accountId = 144553;
// let accountEmail = "mohit@google.com";
// var accountPassword = "12345";
// accountcity = "Kolkata";
// let accountState;

// accountId = 564; reassignment of const variable is not possible


// accountEmail = "csad@google.com"; // we cannot reinitialized let ,
// var accountPassword = "12345+";
/*
prefer not to use var because of block scope and function scope
*/
// accountcity = "Kolkata";

// console.table([accountEmail,accountPassword,accountcity,accountState])
/* here accountState will give undefined because of hoisting as accountState is accessed before initialization and in memeory it will initialized with undefined keyword*/

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Data types

// "Use alert" - alert(3+3)

// 3. Use good coding practice , get use to read documentation (ECMA Script- standard to write JS)
/*JS is dynamically types language, it will assign data type according to data stored in variable
e.g - number,bigint,string,boolean,null-standalone value,undefined,symbol,object*/

// let myname= "Mohit";

// console.log(typeof myname);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Datatype conversion in js*/
let myscore ='87jkh'; //try 0,undefined,true
let valueInNumber = Number(myscore); //explicit conversion
console.log(typeof myscore);
console.log(valueInNumber);  //NaN is a datatype


