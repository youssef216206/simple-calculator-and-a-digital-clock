let display = document.getElementById('display');
let isResultDisplayed = false;

function appendToDisplay(value) {
    if (isResultDisplayed) {
        display.value = '';
        isResultDisplayed = false;
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    isResultDisplayed = false;
}

function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
    isResultDisplayed = false;
}

function calculate() {
    display.value = eval(display.value);
    isResultDisplayed = true;
}



