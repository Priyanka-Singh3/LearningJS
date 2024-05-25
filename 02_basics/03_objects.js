//singleton
//Object.create

//object literals
const mySym = Symbol("key1");
const JsUser = {
    name: "PRIYANKA",
    age: 20,
    email: "pri1062003@gmail.com",
    [mySym] : "mykey1"
}
console.log(JsUser.name)
console.log(JsUser['name'])
console.log(JsUser[mySym])

//to freeze the values 
// Object.freeze(JsUser)

//we can add a function also
JsUser.greeting = function() {
    console.log(`Hello JS user ${this.name}`)
}

console.log(JsUser.greeting) // [Function(anonymous)]
console.log(JsUser.greeting()) 

