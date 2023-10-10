let inputText = document.getElementById("inputtext");
let resultElement = document.getElementById("result");
let calculate = (value) => {
    // Append the value to the input screen
    inputText.value += value;
};
let simplify = () => {
    try {
        let expression = inputText.value;
        let result = eval(expression);
        if (isNaN(result)) {
            throw new Error("Invalid expression");
        }
        resultElement.textContent = result;
        // Clear the input screen
        inputText.value = "";
    } catch (err) {
        resultElement.textContent = "Syntax Error: " + err.message;
    }
};
function clr() {inputText.value = ""; resultElement.textContent = "Result: ";}
function del() {inputText.value = inputText.value.slice(0, -1);}

function power() {inputText.value = ""; resultElement.textContent = "" ;}
