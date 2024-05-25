const score = 400;
const balance = Number(400);
// console.log(balance.toString().length)
// console.log(typeof balance) //number
// balance.toString();
// console.log(typeof balance) //number
// console.log(balance.toFixed(2));
// console.log(typeof balance) //number

const otherNumber = 124.678
console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++//

console.log(Math.random()) //between 0 and 1 always
console.log(Math.floor(Math.random() * 10)+1) //always between 1 and 9

const min = 10
const max = 20

//remember => Math.floor(Math.random()*(max-min+1)) + min 
//this will give value between min and max always

