/*Local scope insite a function */

const fruits = () => {
    var fruit = "apple"
    console.log(fruit)
}
// Call the function
fruits();

// Call the local variable "fruit"
// Shows an error. fruit is local
console.log(fruit)


const anotherFunction = () => {
    var x = 1;
    var x = 2;
    // let: can not be reassigned
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}
//Call anotherFunction()
anotherFunction();

// Recomendacion: Usar "const" y "let" para la asignacion de las variables con el fin de evitar sobreescribir 