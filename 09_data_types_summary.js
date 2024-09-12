/* datatypes summary */
/* Mainly 2 types on basis of memory storage 1. Primitive Data type - stack memory(we get reference and it makes a copy) - 
7 types -string, Number, Boolean, null, undefined, Symbol , Bigint

2. Reference type (Non primitive) - Heap memory
 array, Objects, Functions

JS is a dynamically typed language */
const score=100
let userEmail;

const id =Symbol('236') 
const id2 =Symbol('236')
console.log(id==id2) // give false as symbol is used to make var unique 





const heros = ["saktiman",'naagraj','doga']
let myobj = {
    name:"Mohit",
    age:29
}

let funcvar= function () {
    console.log('hello world')
}

funcvar()

var datatype ={
    array:console.log(typeof heros)
}

console.log(datatype)