 let result = document.getElementById("inputtext");
let calculate = (numbers) => {result.value += numbers;};
let simplify = () => {
  try { result.value = eval(result.value);
    if (isNaN(result.value)) {
      throw new Error("Invalid expression");
    }
  } catch (err) {
    result.value = "Syntax Error: " + err.message;
  }
};
function clr() {result.value = "";}
function del() {result.value = result.value.slice(0, -1);}
function power() {result.value = "  ";}