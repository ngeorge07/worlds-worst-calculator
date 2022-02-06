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

calcBtn.addEventListener("click", calculate);

function calculate() {
  const operator = operatorList.options[operatorList.selectedIndex].text;
  const newResult = document.createElement("li");
  const secondNr = parseFloat(document.querySelector("#secondnumber").value);

  firstNr = parseFloat(firstNrElement.value);

  const result = calc[operator](firstNr, secondNr);
  firstNrElement.value = result;
  newResult.innerText = result;

  setTimeout(() => {
    resultsList.scrollTop = resultsList.scrollHeight;
  }, 100);

  resultsList.appendChild(newResult);
}
