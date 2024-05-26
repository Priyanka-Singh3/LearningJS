//filter

const nums = [1, 2, 3, 4, 5]
const temp = nums.filter( (num) => num > 2 ) //it will result into an array
//or
const tmp = nums.filter((num) => {
    return num>2
})
// console.log(tmp)

//map function
const myNums = [1, 2, 3, 4, 5]
const myNewNums = myNums.map( (num) => {
    return num+10;
} )
// console.log(myNewNums)

//chaining
const newArr = myNums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num > 20)
// console.log(newArr)

//reduce function
const newSum= myNums.reduce(function (accumulator, currVal) {
    return accumulator+currVal
}, 0)

const total = myNums.reduce((acc, item) => acc+item, 0)
console.log(total)


