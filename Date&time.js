const my_date=new Date();
// console.log(my_date.toDateString())
// console.log(my_date.toLocaleString())
// console.log(my_date.getFullYear())
// console.log(typeof my_date) // so it is an object

const mynewdate=new Date(2024,5,19);
// console.log(mynewdate.toDateString())
let mytimestamp = Date.now()
// console.log(mytimestamp)
console.log(mynewdate.getTime())
mynewdate.toLocaleString('default',{
    weekday:'long',
})

