"use strict";

const operatorList = document.querySelector("#operator");
const calcBtn = document.querySelector("#calculate");
const calc = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return a / b;
  },
};
const resultsList = document.querySelector("#results");
const firstNrElement = document.querySelector("#firstnumber");
let firstNr;
const checkbox = document.querySelector("#doround");
const roundOptions = document.querySelector("#decimals");
const clear = document.querySelector("#clear");

calcBtn.addEventListener("click", calculate);
clear.addEventListener("click", () => {
  const allResults = resultsList.querySelectorAll("li");

  for (let i = 0; i < allResults.length; i++) {
    allResults[i].remove();
  }
});

function calculate() {
  const operator = operatorList.options[operatorList.selectedIndex].text;
  const newResult = document.createElement("li");
  const secondNr = parseFloat(document.querySelector("#secondnumber").value);

  firstNr = parseFloat(firstNrElement.value);

  const result = calc[operator](firstNr, secondNr);

  if (checkbox.checked) {
    const roundTo = roundOptions.options[roundOptions.selectedIndex].text;
    firstNrElement.value = result.toFixed(roundTo);
    newResult.innerText = result.toFixed(roundTo);
  } else {
    firstNrElement.value = result;
    newResult.innerText = result;
  }

  setTimeout(() => {
    resultsList.scrollTop = resultsList.scrollHeight;
  }, 100);

  resultsList.appendChild(newResult);
}
