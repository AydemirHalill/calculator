const buttons = document.querySelectorAll('.key');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const AC = document.querySelector('.ac');
const DEL = document.querySelector('.del');
const dot = document.querySelector('.dot');

let lastChar;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        lastChar = button.value;
        output.value += button.value;
    });
});

AC.addEventListener('click', () => {
    output.value = "";
});

DEL.addEventListener('click', () => {
    if (output.value !== "") {
        output.value = output.value.slice(0, -1);
    }
});

dot.addEventListener('click', () => {
    if (lastChar !== '.') {
        output.value += ".";
        lastChar = '.'; 
    }
});

equal.addEventListener('click', () => {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = '* * * * * * *';
    }
});
