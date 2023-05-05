//input array
const input = [];
//HTML elements
const operants = Array.from(document.querySelectorAll('.row button'));
const operators = Array.from(document.querySelectorAll('.operations button'));
const clr = document.getElementById('clr');
const displayElement = document.querySelector('.output');


//Events
operants.forEach(operant => {
    operant.addEventListener('click',() => {
        input.push(operant.textContent);
        display(input);
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        input.push(operator.textContent);
        display(input);
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
    switch(operant) {
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