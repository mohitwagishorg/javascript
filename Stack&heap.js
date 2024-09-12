/* stack(Primitive), Heap(Non-Primitive)*/

let myName = "Mohit"; //---> Primitive always gets a reference
let SecName= myName
SecName="Wagish"
console.log(SecName)
console.log(myName)

let myobj={
    email:"abc@gmail.com"
}

myobj['email']='mohit@hotmail.com'
console.log(myobj) // uses heap memory and it will get reference so changes will take place in memory unlike stack it will make a copy
