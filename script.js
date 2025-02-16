// Initialize parameters
let firstVariable = 0;
let secondVariable = 0;
let operator = "none";
let allowFirstVariable = true;
let wipeFirstVariable = true;

// Allow user to enter numerical values as first or second variable
let one = document.querySelector("#one");
one.addEventListener('click', () => {
    if (allowFirstVariable && wipeFirstVariable){
        firstVariable = "1"
        operator = "none"
        wipeFirstVariable = false;
    } else if (allowFirstVariable && !wipeFirstVariable){
        firstVariable = firstVariable + "1";
        operator = "none";
    } else {
        secondVariable = secondVariable + "1";
    };
    console.log(`The firstVariable is ${+firstVariable} and the secondVariable is ${+secondVariable}.`)
});

let two = document.querySelector("#two");
two.addEventListener('click', () => {
    if (allowFirstVariable && wipeFirstVariable){
        firstVariable = "2"
        operator = "none"
        wipeFirstVariable = false;
    } else if (allowFirstVariable && !wipeFirstVariable){
        firstVariable = firstVariable + "2";
        operator = "none";
    } else {
        secondVariable = secondVariable + "2";
    };
    console.log(`The firstVariable is ${+firstVariable} and the secondVariable is ${+secondVariable}.`)
});

// Define addition button and function
let add = document.querySelector("#add");
add.addEventListener('click', () => {
    operator = "addition";
    allowFirstVariable = false;
    secondVariable = "";
    console.log("You clicked addition.")
});

let performAddition = function(a, b){
    let added = +a + +b;
    return added;
};

// Print result
let equals = document.querySelector("#equals");

equals.addEventListener('click', () => {
    if (operator === "none"){
        let result = firstVariable;
        firstVariable = result;
        console.log(`There is no operator, so the result is just ${+result}.`)
    };

    if (operator === "addition" && secondVariable !== ""){
        let result = performAddition(firstVariable, secondVariable);
        allowFirstVariable = true;
        console.log(`The firstVariable is ${+firstVariable}, the secondVariable is ${+secondVariable} and the operator is ${operator}, so the result is ${+result}.`);
        firstVariable = result;
    };

    wipeFirstVariable = true;
});

// Erase all
let clearAll = document.querySelector("#clearAll");
clearAll.addEventListener('click', () => {
    firstVariable = 0;
    secondVariable = 0;
    operator = "none";
    allowFirstVariable = true;
    console.log(`firstVariable is ${firstVariable}, 
        secondVarialbe is ${secondVariable}, 
        operator is ${operator} 
        and allowFirstVariable is ${allowFirstVariable}.`)
})