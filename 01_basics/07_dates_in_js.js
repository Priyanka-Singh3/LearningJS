let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

let myCreateDate = new Date('12-07-2550');
// console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myCreateDate.getTime())

console.log(Math.floor(Date.now()/1000))