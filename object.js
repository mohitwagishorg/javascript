// //  singleton

// // Symbol
// const Mysym =Symbol('Key1');

// // objecton literals

// const JsUser = {
//     name:"Mohit",
//     loginTime:[45,56],
//     [Mysym]:'and'    // to make key a symbol
// }
// console.log(JsUser['name'])
// console.log(JsUser.loginTime[1])
// console.log(JsUser[Mysym])

// // freeze

// Object.freeze(Mysym) // after this we cannot change value

// JsUser.greeting = ()=>{
//     console.log("Hello")
// }

// JsUser.greeting()

// // console.log(a.b.c?.d)


// // const obj1={1:'a',2:'b'}

// // const obj2={3:'a',4:'d'}

const obj3=Object.assign({},obj1,obj2) //{} is target 
// // obj3={...obj1,...obj2}
// console.log(obj3)

const users=[{
 

}]