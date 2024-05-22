let score = "99abc"
// console.log(typeof(score))
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 
/* if score was : 
    "99abc" => NaN
    null   => 0
    undefined => NaN
    true => 1
    false => 0
    priyanka => NaN
*/

let isLoggedIn = "";
let booleanVal = Boolean(isLoggedIn)
// console.log(booleanVal) //true for all the values except 0 , ""

//Operations
let val = 3
console.log(-val)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2;

console.log("1" + 2) //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

console.log(+true) //1
console.log(+"") //0


