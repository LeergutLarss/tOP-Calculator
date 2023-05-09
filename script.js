//input array
let input = [];
//HTML elements
const operants = Array.from(document.querySelectorAll('.row button'));
const operators = Array.from(document.querySelectorAll('.operations button'));
const clr = document.getElementById('clr');
const displayElement = document.querySelector('.output');

//Events
let lastInputOperator = true;
operants.forEach(operant => {
    operant.addEventListener('click',() => {
        input.push(operant.textContent);
        lastInputOperator = false;
        display(input);
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if(operator.textContent === '=') {
            console.log('NO');
        } else {
            if(!lastInputOperator) {
                input.push(operator.textContent);
                lastInputOperator = true;
                combineInput(input);
                display(input);
            }
        }
    })
})

clr.addEventListener('click', () => {
    displayElement.textContent = "";
    input.length = 0;
});

//Operations
function add(operant, operant2) {
    return operant + operant2;
}

function sub(operant, operant2) {
    return operant - operant2;
}

function mul(operant, operant2) {
    return operant * operant2;
}

function div(operant, operant2) {
    return operant / operant2;
}

function calculation(operant, operator, operant2) {
    let result = 0;
    switch(operator) {
        case('+'):
            result = add(operant, operant2);
            break;
        case('-'):
            result = sub(operant, operant2);
            break;
        case('*'):
            result = mul(operant, operant2);
            break;
        case('/'):
            result = div(operant, operant2);
            break;
        default:
            return 'ERR: Calculation';
    }
    return result;
}

function display(input) {
    displayElement.textContent = "";
    input.forEach(value => {
        displayElement.textContent += value;
    });
}

function combineInput(input) {
    let combinedInput = "";
    let i = 0
    for (; i < input.length - 1; i++) {
        combinedInput += input[i];
    }
    for(let k = 0; k < i; k++) {
        input.shift();
    }
    input.unshift(`${combinedInput}`);
}