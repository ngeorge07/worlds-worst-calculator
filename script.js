"use strict";

const operatorList = document.querySelector("#operator");
const calcBtn = document.querySelector("#calculate");

calcBtn.addEventListener("click", calculate);

function calculate() {
  const firstNr = parseFloat(document.querySelector("#firstnumber").value);
  const secondNr = parseFloat(document.querySelector("#secondnumber").value);
  console.log(firstNr + secondNr);
}
