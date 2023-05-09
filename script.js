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
        }
    });
});
operators.forEach((operat) => {
    operat.addEventListener('click', () => {
        if(operat.textContent == '=') {
            // CALC LATORER TODO
        } else {
            if(input.operator == "") {
                input.isFirst = false;
                input.start = true;
                input.comma = false;
                input.operator = operat.textContent;                
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
})

function numberInput(number, input) {
        if(input.isFirst) {
            input.firstValue += number;
        } else {
            input.secondValue += number;
        } 
        input.start = false;
    console.log(input);
}
