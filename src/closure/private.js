/* Private variables are set by using closures */

const person = (name) => {
    var personName = name;
    // Returns an object with 2 functions
    return{
        setName: (newName) => {
            personName  = newName;
        },
        getName: () => {
            return personName;
        }
    }
}

// Instantiate a closure
const newPerson = person("Manuel");
// Call the function
console.log(newPerson.getName());   // -> Manuel
newPerson.setName("Juan Manuel")
console.log(newPerson.getName());   // -> Juan Manuel
newPerson.setName("Angie")
console.log(newPerson.getName());   // -> Angie