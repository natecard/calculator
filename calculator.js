let firstOperand = ''
let currentOperation = ''
let shouldResetScreen = false

//the operators for equations
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a/b;
const displays = document.getElementById("displays")
const lowerDisplay = document.getElementById("lowerDisplay");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const topDisplay = document.getElementById("topDisplay");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>
    number.addEventListener('click', () => appendNumber(number.textContent))
    );

operators.forEach((operator) =>
    operator.addEventListener('click', () => setOperator(operator))
    );

function appendNumber(number) {
    if (lowerDisplay.textContent === '0' || shouldResetScreen)
    resetScreen()
    lowerDisplay.textContent += number
};

function resetScreen() {
    lowerDisplay.textContent= ''
    shouldResetScreen = false
}

function setOperator(operator) {
    if (lowerDisplay.textContent != null)
    currentOperation = operator.textContent;
    firstOperand = lowerDisplay.textContent
    topDisplay.textContent = `${firstOperand} ${currentOperation}`;
    resetScreen();
}

function clearMemory() {
    lowerDisplay.textContent =''
    topDisplay.textContent=''
    shouldResetScreen = false
}

clear.addEventListener("click", () => clearMemory());

equal.addEventListener("click", () => operate(firstOperand, secondOperand, currentOperation));

let secondOperand = `${lowerDisplay.textContent}`

//takes user selected operator and processes equation 
function operate(secondOperand, firstOperand, currentOperation) {
    if (currentOperation==='÷') {
        divide(firstOperand, secondOperand)
    } else if (currentOperation==='x') {
        multiply(firstOperand,secondOperand)
    } else if (currentOperation==='-') {
        subtract(firstOperand, secondOperand)
    } else if (currentOperation==='+') {
        add(firstOperand, secondOperand)
    } else {
        return null
    }
    console.log(firstOperand, currentOperation, secondOperand)
}
