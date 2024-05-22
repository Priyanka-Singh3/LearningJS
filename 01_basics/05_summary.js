// Primitive
//7-types : String , Number, Boolean , null, undefined, bigInt

//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

const id = Symbol('123')
const num = 123n //bigint
console.log(typeof num)

const cartoons = ["doremon", "ninja", "pikachu"]
const myObj = {
    name: "pri",
    age: 20
}
const myFunc = function() {
    console.log("Hello World")
}

console.log(typeof cartoons)
//Reference (Non-primitive)
//Array, objects, Functions
