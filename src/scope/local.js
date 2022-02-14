/*Local scope */

const helloWorld = () => {
    //Declare a local scope
    const hello = "Hello World!"
};
// Call the function
helloWorld();
// Not allowed outside the function
console.log(hello);


// Declare a global variable
var scope = "I'm global";

const functionScope = () => {
    var scope = "I'm local";
    const functionScope2 = () =>{
        return scope
    }
    console.log(functionScope2());
};
// Lexical scope
functionScope();
console.log(scope)
