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
// let myscore ='87jkh'; //try 0,undefined,true
// let valueInNumber = Number(myscore); //explicit conversion
// console.log(typeof myscore);
// console.log(valueInNumber);  //NaN is a datatype

// let value=3
// let negvalue= -value
// console.log(negvalue)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------

/*String to number conversion */
// let str1="hello"
// let str2="  Mohit"
// console.log(str1+str2);
// console.log("1"+2)
// console.log(2+"1")
// console.log(2+2+"1") //interesting actually this is according to ECMA guidelines

// console.log(3+89*55/45) //please use parenthesis instead of being smart and write clean code
// console.log(+true)

// let num1,num2,num3
// num1=num2=num3=2+2 //again dont write messy code please
// console.log(num2)

// let gamecounter=100
// gamecounter++ //postincrement
// ++gamecounter //preincrement
// console.log(gamecounter)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/* comparison of datatypes in js */
// console.log("2">1)
// console.log("02">1)
// console.log("02">1)
console.log(null>0)
console.log(null==0)
console.log(null>=0) // true because while using comparision it convert null to 0

console.log(undefined==0)
//please avoid these comparision and write clean code 
//Difference between '==' and '===' is '===' is strict check mean (value and data type both)

