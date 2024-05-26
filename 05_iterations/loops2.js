//for of

const arr = [1, 2, 3, 4]
let str = "hello ji"

for (const i of arr) {
    // console.log(i)
}
// console.log("")
for(const letter of str) {
    // console.log(letter)
}

//Maps
const map = new Map() //remains in same order as entered
map.set(1, 1)
map.set(2, 1)
map.set(3, 2)
// console.log(map)

for(const [key, value] of map) {
    // console.log(key, ":-", value)
}


//loop on objects
const myObj = {
    name1: "Pri",
    name2: "Priyanka"
}
// for(const [names] of myObj) {
    // console.log(names) //objects are not iterable 
// }

//for-in loop

for (const key in myObj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(`key is : ${key} and value is ${myObj[key]}`) //name1 and name2 are keys
}
//maps not iterable using for-in loop

//for-each loop
//syntax is : array.forEach(pass a call back function,i.e, function doesn't have a name)
const coding = ["js", "java", "cpp"]

coding.forEach(function (item) {
    // console.log(item)
})

coding.forEach( (item, index, arr)=> {

} )

const myCoding = [
    {
        course: "java",
        price: 3000
    },
    {
        course: "cpp",
        price: 3000
    }
]
myCoding.forEach( (item) => {
    console.log(item.course)
} )


