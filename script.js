const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('.output');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
}

function inputDigit(digit) {

    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        if (calculator.displayValue === '0') {
            calculator.displayValue = digit;
        }
        else {
            calculator.displayValue = calculator.displayValue + digit;
        }
    }

    console.log(calculator);
}


function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
      calculator.waitingForSecondOperand = false;
      return
    }
    // If the `displayValue` property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    // Destructure the properties on the calculator object
    const { firstOperand, displayValue, operator } = calculator
    // `parseFloat` converts the string contents of `displayValue`
    // to a floating-point number
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    // verify that `firstOperand` is null and that the `inputValue`
    // is not a `NaN` value
    if (firstOperand === null && !isNaN(inputValue)) {
        // Update the firstOperand property
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;

        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;

    console.log(calculator);

}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === 'plus') {
        return firstOperand + secondOperand;
    } else if (operator === 'minus') {
        return firstOperand - secondOperand;
    } else if (operator === 'multiply') {
        return firstOperand * secondOperand;
    } else if (operator === 'divide') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

function getPercentage(displayValue){
   return (parseFloat(displayValue) / 100).toString();
}

function plusMinus(displayValue){
    return parseFloat(- displayValue).toString();
    }


updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // Access the clicked element
    const target = event.target;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('.btn')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();

        return;
    }

    if (target.classList.contains('decimal')) {
        console.log("DECIMAL");
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        console.log("clear")
        resetCalculator();
        updateDisplay();
        return;
    }

    if(target.classList.contains('percentage')){
        console.log('percentage');
        calculator.displayValue = getPercentage(calculator.displayValue);
        updateDisplay();
        return;
    }

    if(target.classList.contains('plus/minus')){
        console.log("plus/minus");
        calculator.displayValue = plusMinus(calculator.displayValue);
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();

});


