const display = document.getElementById('display');
let isResultDisplayed = false;

function appendToDisplay(input) {
     if (isResultDisplayed) { 
          display.value = ''; 
          isResultDisplayed = false; }
     display.value += input;
};

function clearDisplay() {
     display.value = "";
};

function calculate() {
     try {
          display.value = new Function('return ' + display.value)();
          isResultDisplayed = true;
     } catch (error) {
          display.value = 'ERROR!'
     }
}