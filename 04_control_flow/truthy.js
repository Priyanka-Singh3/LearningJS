//falsy values
//false, 0, -0, "", null, undefined, NaN, 0n(bigInt)

//truthy values example
//" ", [], {}, function(){}, "0", "false"

const obj = {}
if(Object.keys(obj).length === 0) {
    console.log("object is empty")
}

if(undefined == false) { // 0 == false, "" == false, 0 == "", all these are true conditions
    console.log("true") //will not run
}

//Nullish Coalescing Operator (??) : null undefined

const val1 = 5 ?? 10 //5 is assigned
let val2 = null ?? 10 //10 is assigned
let val3 = undefined ?? 10 ?? 20 //10 is assigned

console.log(val1);
console.log(val3);

//Ternary Operator
// ? :
