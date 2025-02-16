// Initialize parameters
let firstVariable = 0;
let secondVariable = 0;
let operator = undefined;
let allowFirstVariable = true;
let wipeFirstVariable = true;
let result = 0;

// Print values as output
let calculation = document.querySelector(".calculation");
let answer = document.querySelector(".answer");

// Allow user to enter numerical values as first or second variable
let pressNumber = function(press){
    if (allowFirstVariable && wipeFirstVariable){
        firstVariable = press;
        operator = undefined;
        wipeFirstVariable = false;
        calculation.textContent = `${+firstVariable}`;
        answer.textContent = ``;
    } else if (allowFirstVariable && !wipeFirstVariable){
        firstVariable = firstVariable + press;
        operator = undefined;
        calculation.textContent = `${+firstVariable}`;
        answer.textContent = ``;
    } else {
        secondVariable = secondVariable + press;
        calculation.textContent = `${+firstVariable} ${operator} ${+secondVariable}`;
    };
};

let one = document.querySelector("#one");
one.addEventListener('click', () => pressNumber("1"));

let two = document.querySelector("#two");
two.addEventListener('click', () => pressNumber("2"));

let three = document.querySelector("#three");
three.addEventListener('click', () => pressNumber("3"));

let four = document.querySelector("#four");
four.addEventListener('click', () => pressNumber("4"));

let five = document.querySelector("#five");
five.addEventListener('click', () => pressNumber("5"));

let six = document.querySelector("#six");
six.addEventListener('click', () => pressNumber("6"));

let seven = document.querySelector("#seven");
seven.addEventListener('click', () => pressNumber("7"));

let eight = document.querySelector("#eight");
eight.addEventListener('click', () => pressNumber("8"));

let nine = document.querySelector("#nine");
nine.addEventListener('click', () => pressNumber("9"));

let zero = document.querySelector("#zero");
zero.addEventListener('click', () => pressNumber("0"));

// Set operators
let setOperator = function(theOperator){
    operator = theOperator;
    allowFirstVariable = false;
    secondVariable = "";
    calculation.textContent = `${+firstVariable} ${operator}`;
    answer.textContent = ``;
}

// Define addition
let add = document.querySelector("#add");
add.addEventListener('click', () => setOperator("+"));
let performAddition = function(a, b){
    let added = +a + +b;
    return added;
};

// Define subtraction
let subtract = document.querySelector("#subtract");
subtract.addEventListener('click', () => setOperator("-"));
let performSubtraction = function(a,b){
    let subtracted = +a - +b;
    return subtracted;
};

// Define multiplication
let multiplication = document.querySelector("#multiplication");
multiplication.addEventListener('click', () => setOperator("*"));
let performMultiplication = function(a,b){
    let multiplied = +a * +b;
    return multiplied;
}

// Define division

// Perform calculation
let equals = document.querySelector("#equals");
equals.addEventListener('click', () => {
    if (operator === undefined){
        result = firstVariable;
    };

    if (secondVariable === ""){
        operator = undefined;
        calculation.textContent = `${+firstVariable}`;
    }

    if (operator === "+" && secondVariable !== ""){
        result = performAddition(firstVariable, secondVariable);
        calculation.textContent = `${+firstVariable} ${operator} ${+secondVariable}`;
        firstVariable = result;
    };

    if (operator === "-" && secondVariable !== ""){
        result = performSubtraction(firstVariable, secondVariable);
        calculation.textContent = `${+firstVariable} ${operator} ${+secondVariable}`;
        firstVariable = result;
    };

    if (operator === "*" && secondVariable !== ""){
        result = performMultiplication(firstVariable, secondVariable);
        calculation.textContent = `${+firstVariable} ${operator} ${+secondVariable}`;
        firstVariable = result;
    };

    allowFirstVariable = true;
    wipeFirstVariable = true;
    answer.textContent = `${result}`;
});

// Erase all
let clearAll = document.querySelector("#clearAll");
clearAll.addEventListener('click', () => {
    firstVariable = 0;
    secondVariable = 0;
    operator = "none";
    allowFirstVariable = true;
    calculation.textContent = ``;
    answer.textContent = ``;
});
