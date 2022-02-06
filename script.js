"use strict";

const operatorList = document.querySelector("#operator");
const calcBtn = document.querySelector("#calculate");

calcBtn.addEventListener("click", calculate);

function calculate() {
  const resultsList = document.querySelector("#results");

  const firstNr = parseFloat(document.querySelector("#firstnumber").value);
  const secondNr = parseFloat(document.querySelector("#secondnumber").value);

  const operator = operatorList.options[operatorList.selectedIndex].text;
  const result = document.createElement("li");

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

  result.innerText = calc[operator](firstNr, secondNr);

  setTimeout(() => {
    resultsList.scrollTop = resultsList.scrollHeight;
  }, 100);
  resultsList.appendChild(result);
}
