/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
const covertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const inputEl = document.getElementById("input-el");

covertBtn.addEventListener("click", function () {
  let originalValue = inputEl.value;
  // prettier-ignore
  lengthEl.textContent = `${originalValue} meters = ${(originalValue * meterToFeet).toFixed(3)} feet | ${originalValue} feet = ${(originalValue / meterToFeet).toFixed(3)} meters`;;
  // prettier-ignore
  volumeEl.textContent = `${originalValue} liters = ${(originalValue * literToGallon).toFixed(3)} gallons | ${originalValue} gallons = ${(originalValue / literToGallon).toFixed(3)} liters`;;
  // prettier-ignore
  massEl.textContent = `${originalValue} kilos = ${(originalValue * kiloToPound).toFixed(3)} pounds | ${originalValue} pounds = ${(originalValue / kiloToPound).toFixed(3)} kilos`;})
