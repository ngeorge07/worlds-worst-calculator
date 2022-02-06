"use strict";

const operatorList = document.querySelector("#operator");
const calcBtn = document.querySelector("#calculate");

calcBtn.addEventListener("click", calculate);

function calculate() {
  const firstNr = parseFloat(document.querySelector("#firstnumber").value);
  const secondNr = parseFloat(document.querySelector("#secondnumber").value);

  const operator = operatorList.options[operatorList.selectedIndex].text;

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

  console.log(calc[operator](firstNr, secondNr));
}
