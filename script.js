//input
const input = {
    firstValue: "",
    secondValue: "",
    operator: "",
    isFirst: true,
    start: true,
    comma: false,
}
const numbers = Array.from(document.querySelectorAll('.numbers button'));
//Events
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if(!(number.textContent == '.' && input.start) || !(number.textContent == '.' && input.comma)) {
            if(number.textContent == '.') {
                input.comma = true;
            }
            numberInput(number.textContent, input);
        }
    });
});


function numberInput(number, input) {
        if(input.isFirst) {
            input.firstValue += number;
        } else {
            input.secondValue += number;
        } 
    console.log(input);
}
