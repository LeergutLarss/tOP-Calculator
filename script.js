//math vars
let firstNumber;
let secondNumber;
let operator;

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