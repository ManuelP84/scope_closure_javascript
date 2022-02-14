/*Local scope insite a block */

const fruits = () => {
    if (true){
        var fruits1 = "apple";
        let fruits2 = "bananna";
        const fruits3 = "kiwi";
    }
    // "var" can be accessed outside the block in the function
    console.log(fruits1);
    // "let" and "const" only can be accessed inside the block. For example inside the if{}
    console.log(fruits2);
    console.log(fruits3);
}
// Call the function
fruits();


// global assignment
let x = 1;
{
    //local assignment
    let x = 2;
    // print local assignment
    console.log(x)
}
// print global assignment
console.log(x)


// global assignment
var x = 1;
{
    //reassignment of "x"
    var x = 2;
    console.log(x)
}
console.log(x)


// Example of local scope and global scope
const anotherFunction = () => {

    // Different result if it is used "var" and "let"
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i)
        }, 2000)
    }
}
// Call the function
anotherFunction();