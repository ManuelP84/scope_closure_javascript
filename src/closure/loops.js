/* Loop */

const loopFunction = () => {

    // Different result if it is used "var" and "let"
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i)
        }, 2000)
    }
}
// Call the function
loopFunction();