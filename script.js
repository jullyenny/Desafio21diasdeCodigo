const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const previousKeyType = calculator.dataset.previousKeyType;
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
    if (!action) {
        calculator.dataset.previousKey = 'number'
      if (displayedNum === "0" || calculator.dataset.previousKeyType === "operator") {
        console.log("chegamos aqui denovo")
        display.textContent = keyContent;
      } else {
        console.log(displayedNum + keyContent)
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
       
      key.classList.add("is-depressed");
      console.log("operator key!",action);
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.'
        } else if (previousKeyType === 'operator') {
          display.textContent = '0.'
        }
        
      calculator.dataset.previousKeyType = 'decimal'
      }
      if (action === 'clear') {
        display.textContent = 0
        key.textContent = 'AC'
        calculator.dataset.previousKeyType = 'clear'
      }
    if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
      }
    if (action === "calculate") {
      console.log("equal key!");
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      calculator.dataset.previousKeyType = 'calculate'
      

      const calculate = (n1, operator, n2) => {
        let result = "";

        if (operator === "add") {
          result = parseFloat(n1) + parseFloat(n2);
          console.log(parseFloat(n1));
        } else if (operator === "subtract") {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === "multiply") {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === "divide") {
          result = parseFloat(n1) / parseFloat(n2);
        }
        return result;
      };
      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});
