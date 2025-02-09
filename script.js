let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");
let operator = "";
let firstValue = "";
let secondValue = "";

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = button.getAttribute("data-value");

    if (value === "C") {
      display.value = "";
      firstValue = "";
      secondValue = "";
      operator = "";
    } else if (value === "=") {
      if (firstValue !== "" && operator !== "" && secondValue !== "") {
        let result = performCalculation(firstValue, operator, secondValue);
        display.value = result;
        firstValue = result;
        secondValue = "";
        operator = "";
      }
    } else if (["/", "*", "-", "+"].includes(value)) {
      if (firstValue === "") {
        firstValue = display.value;
      }
      operator = value;
      display.value = "";
    } else {
      display.value += value;
      if (operator === "") {
        firstValue += value;
      } else {
        secondValue += value;
      }
    }
  });
});

function performCalculation(firstValue, operator, secondValue) {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);
  
  switch (operator) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "*":
      return firstValue * secondValue;
    case "/":
      if (secondValue === 0) {
        return "Error";
      } else {
        return firstValue / secondValue;
      }
  }
}