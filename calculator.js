let firstOperand = ''
let currentOperation = ''
let shouldResetScreen = false
let secondOperand= ''
let answer = ''

//the operators for equations
function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
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
    operation = operator.id;
    switch (operation) {
        case "+":
            currentOperation = "+"
            break;
        case "-":
            currentOperation = "-"
            break;
        case "*":
            currentOperation = "*"
            break;
        case "/":
            currentOperation = "/"
            break;
        default:
            resetScreen()
            break;
    }
    numberOne = lowerDisplay.textContent;
    firstOperand = numberOne
    topDisplay.textContent = `${firstOperand} ${currentOperation}`;
    resetScreen();
}

function clearMemory() {
    lowerDisplay.textContent =''
    topDisplay.textContent=''
    shouldResetScreen = false
}
clear.addEventListener("click", () => clearMemory());

equal.addEventListener("click", () => operate());

//takes user selected operator and processes equation 
function operate(secondOperand, firstOperand) {
    firstOperand = parseFloat(numberOne)
    secondOperand = parseFloat(lowerDisplay.textContent)
    setOperator(currentOperation)
    switch (currentOperation) {
        case "+":
            answer = add(firstOperand, secondOperand)
            answer = Math.round(answer*100)/100
            lowerDisplay.textContent = answer
            topDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`
            break;
        case "-":
            answer = subtract(firstOperand, secondOperand)
            answer = Math.round(answer*100)/100
            lowerDisplay.textContent = answer
            topDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`
            break;
        case "*":
            answer = multiply(firstOperand, secondOperand)
            answer = Math.round(answer*100)/100
            lowerDisplay.textContent = answer
            topDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`
            break;
        case "/":
            answer = divide(firstOperand, secondOperand)
            answer = Math.round(answer*100)/100
            lowerDisplay.textContent = answer
            topDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`
            break;
        default:
            resetScreen()
            break;
    }
    // console.log(firstOperand, currentOperation, secondOperand)
    // console.log(typeof currentOperation)
}
