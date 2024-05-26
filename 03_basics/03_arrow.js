const user = {
    name: "Pri",
    age: 20,
    welcomeMess: function() {
        console.log(`${this.name}, welcome`)
    }
}

//this keyword is used to refer to current context
//global object of browser is window
//if we print console.log(this) in node we get empty obj{} but
//in case of inspect , we get window

//arrow function (just remove function keyword)
const f = ()=>{
    let username = "pri"
    console.log(this.username) //will give undefined
}

//when we have single line statements
//i.e, implicit return
const add = (n1, n2) => (n1+n2)

const funcAdd = (n1, n2) => ({username: "priyanka"})