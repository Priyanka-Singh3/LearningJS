//syntax of function
/* 
function myFunc() {
    //definition
}
*/

//myFunc => reference
//myFunc() => execution

function add(n1, n2) {
    console.log(n1 + n2)
}

// const res = add(3, 4) //this will print 7
// console.log(res) // this will print undefined since there is no return 

function loggedInMessage(username) {
    if(username === undefined) { //or we can write if(!undefined) or we can write default value in function (username = "Pri")
        return `please enter username`
    }
    return `${username} just logged in`
}
console.log(loggedInMessage()) //when do pass an argument it prints undefined in place of parameter

//rest or spread operator
// if u want to add any no. of parameters then use this spread operator it will return in the form of array

function totalPrice(...n) {
    return n
}

console.log(totalPrice(200, 2000, 20000)) //[200, 2000, 20000]
