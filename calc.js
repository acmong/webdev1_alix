var displayElement = document.getElementById('displayRow');
var value = 0, value2 = 0;
var maxCharacterLimit = 12; // Maximum character limit for the display
displayElement.innerHTML = 0;
var operator = '';

function storeOperator(op) {
  if (op !== '=') {
    operator = op;
    value2 = value;
    value = 0;
  }
}

function positiveNegative() {
  value = value * -1;
  displayElement.innerHTML = formatNumber(value);
}

function clearCalc() {
  value = 0;
  displayElement.innerHTML = formatNumber(value);
  operator = '';
}

function calculatePercentage() {
  value = (value / 100);
  displayElement.innerHTML = formatNumber(value);
}

function compute() {
  if (operator == '+') {
    value = value2 + value;
  } else if (operator == '-') {
    value = value2 - value;
  } else if (operator == 'x') {
    value = value2 * value;
  } else if (operator == '/') {
    if (value !== 0) {
      value = value2 / value;
    } else {
      // Handle division by zero
      displayElement.innerHTML = "Error";
      return;
    }
  }
  operator = '';
  displayElement.innerHTML = formatNumber(value);
}

function pressDecimalPoint() {
  if (Number.isInteger(value) || value.toString().split('.')[1].length < maxDecimalPlaces) {
    valueString = value.toString();
    if (!valueString.includes('.')) {
      valueString = `${valueString}.`;
    }
    value = parseFloat(valueString);
  }
  displayElement.innerHTML = formatNumber(value);
}

function pressNumber(buttonValue) {
  valueString = value.toString();
  if (valueString == '0') {
    valueString = buttonValue.toString();
    value = buttonValue;
  } else {
    if (Number.isInteger(value) || valueString.length < maxCharacterLimit) {
      valueString = valueString + buttonValue.toString();
      value = parseFloat(valueString);
    }
  }
  displayElement.innerHTML = formatNumber(value);
}

function formatNumber(number) {
  var numberStr = number.toString();
  if (numberStr.length > maxCharacterLimit) {
    // Shrink font size if the number exceeds the character limit
    displayElement.style.fontSize = "2rem"; // Adjust the font size as needed
  } else {
    displayElement.style.fontSize = "3rem"; // Reset font size if within the limit
  }
  return numberStr.slice(0, maxCharacterLimit);
}
