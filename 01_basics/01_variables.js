const accountID = 12345
let accountEmail = "pri@gmail.com"  
var accountPassword = "123"
accountCity = "Delhi"
let accountState; //undefined

//accountId = 12354 // not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "pri1062003@gmail.com"
accountPassword = "pri123"
accountCity = "Kerala"

console.table([accountEmail, accountID, accountPassword, accountCity])
