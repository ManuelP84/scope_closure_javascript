/*Global scope insite a function */

// var:  allows to modify the data
var hello = "Hello"
var hello = "Hello!!!"

// let:  Not allow to modify the data
let world = "World"
let world = "World!!!"

// const:  Not allow to modify the data
const helloWorld = "Hello World"
const helloWorld = "Hello World!!!"

const helloWorldFunf = () => {
    //Global can be used inside the functions
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}
//Call the function
helloWorldFunf()


//Declare a global scope inside a function
const globalVarFunc1 = () =>{
    globalVar = "Im global"
}
//Call the function
globalVarFunc()
console.log(globalVar)


//Declare a global scope inside a function
const globalVarFunc2 = () =>{
    globalVar = "Im global"
}
//Call the function
globalVarFunc()
console.log(globalVar)
