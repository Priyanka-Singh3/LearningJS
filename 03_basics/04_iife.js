//Immediately Invoked Function Expression (IIFE)

//global scope ke pollution se problem hoti h mostly , so to remove that we use iife

(function chai() {
    //named IIFE, since there is a named function
    console.log("DB CONNECTED")
})(); //we have to add a semi colon so that other below functions can run and there is no error



//()() : first bracket is for func definition and 2nd one is for its execution
//chai()

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("PRIYANKA");