const newObj = new Object() //singleton object

//const Obj = {} this is non-singleton object

//object can also exist as an key inside that object => nested objects

//we can merge objects also
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2} //spread

const user = [
    {

    },
    {

    },
    {

    }
] //array of objects

//to get the keys
// console.log(Object.keys(obj1)) //as an array

//to get the values
// console.log(Object.values(obj1)) //as an array

// console.log(Object.entries(obj1)) //array of array of key and values

//de-structuring
const course = {
    cname: "dsa",
    ccost: 600,
    cinstructor: "Shradha didi"
}

const {cinstructor: inst} = course
console.log(inst)

//data from backend comes in the form of json  (api data is in the form of json)
/* 
json format
{
    "name" : "Pri",
    "email" : "pri1062003@gmail.com"
}
*/
