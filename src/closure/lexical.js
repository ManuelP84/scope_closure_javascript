/* Closure example to see the lexical scope */

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        // count++: first returns count and then increment
        // ++count: first increment and then returns count
        console.log(count++);
    }
    return displayCount;
}

// Instantiate a closure with a lexical scope
const myCount = buildCount(1);
// Call the function
myCount();  // -> 1
myCount();  // -> 2
myCount();  // -> 3

// Instantiate a new closure with a new lexical scope
const myOtherCount = buildCount(10);
// Call the function
myOtherCount(); // -> 10
myOtherCount(); // -> 11
myOtherCount(); // -> 12