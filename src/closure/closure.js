/* Closure */

// Create a moneyBox function. It does not save the previous value
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
// Call the function
moneyBox(5);
moneyBox(10);
moneyBox(20);


// Create a closure
const moneyFunction = () =>{
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

// Instantiate the lexical scope
let myMoneyBox = moneyFunction();
// Call the function
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(30);