// Initialize parameters
let firstVariable;
let secondVariable;
let operator;

// Allow user to enter numerical values as first or second variable
let one = document.querySelector("#one");
one.addEventListener('click', () => {
    if (!firstVariable){
        firstVariable = 1;
    } else {
        secondVariable = 1;
    };
});

let two = document.querySelector("#two");
two.addEventListener('click', () => {
    if (!firstVariable){
        firstVariable = 2;
    } else {
        secondVariable = 2;
    };
});

// Define addition button and function
let add = document.querySelector("#add");
add.addEventListener('click', () => {
    operator = 1;
});

let performAddition = function(a, b){
    let added = a + b;
    return added;
};

// Print result
let equals = document.querySelector("#equals");

equals.addEventListener('click', () => {
    if (operator = 1){
        let result = performAddition(firstVariable, secondVariable);
        console.log(`Result is ${result}.`);
        firstVariable = result;
        return result;
    }
});

// Erase all
let clearAll = document.querySelector("#clearAll");
clearAll.addEventListener('click', () => {
    firstVariable = undefined;
    secondVariable = undefined;
    operator = undefined;
    console.log(`firstVariable is ${firstVariable}, secondVarialbe is ${secondVariable} and operator is ${operator}.`)
})