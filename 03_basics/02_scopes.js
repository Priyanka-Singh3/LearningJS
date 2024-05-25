/*
we have let, const, var
=> var can be re-declared inside a scope or outside the scope ..its value will be changed
=> let and const once defined inside a scope they are not available outside that scope
*/

/*

global scope
 {
    local scope or block scope
 }

*/

//global scope through window inspect is different from the one used in code using node

//func declaration
function add1 (n) {
   return n+1;
}
//in above case we can call add1(3) before the decalaration but in below case we cannot , it will give error
//due to hoisting

const add2 = function(n) {
   return n+2;
}