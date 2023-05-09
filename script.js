//input
const input = {
    firstValue: "",
    operator: "",
    secondValue: "",
    isFirst: true,
    start: true,
    comma: false,
}
const numbers = Array.from(document.querySelectorAll('.numbers button'));
const operators = Array.from(document.querySelectorAll('.operations button'));
const clr = document.getElementById('clr');
//Events
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if(!(number.textContent == '.' && input.start) && !(number.textContent == '.' && input.comma)) {
            if(number.textContent == '.') {
                input.comma = true;
            }
            numberInput(number.textContent, input);
            display(input);
        }
    });
});
operators.forEach((operat) => {
    operat.addEventListener('click', () => {
        if(operat.textContent == '=') {
            input.firstValue = calc(input.firstValue, input.operator, input.secondValue);
            input.start = true;
            input.comma = false;
            input.operator = "";
            input.secondValue = "";
            display(input);
        } else {
            if(input.operator == "") {
                input.isFirst = false;
                input.start = true;
                input.comma = false;
                input.operator = operat.textContent;
                display(input);                
            }
        }
    })
})
clr.addEventListener('click', () => {
    input.firstValue = "";
    input.secondValue = ""; 
    input.operator = "";
    input.isFirst = true;
    input.start = true;
    input.comma = false;
    display(input);
})

function numberInput(number, input) {
        if(input.isFirst) {
            input.firstValue += number;
        } else {
            input.secondValue += number;
        } 
        input.start = false;
}

function display(input) {
    const output = document.querySelector('.output');
    output.textContent = input.firstValue;
    output.textContent += input.operator;
    output.textContent += input.secondValue;
}


function calc(firstValue,operator, secondValue) {
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);
    let result;
    switch(operator) {
        case('+'): 
            result = firstValue + secondValue;
            break;
        case('-'):
            result = firstValue - secondValue;
            break;
        case('/'):
            result = firstValue / secondValue;
            break;
        case('*'):
            result = firstValue * secondValue;
            break;        
    }
    if(!Number.isInteger(result)) {
        result = result.toFixed(2);
        console.log(result);
    }
    return result;
}