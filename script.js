let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let result = "";

// Tampilan Input ke layar
const calculatorEntry = document.querySelector(".calculator-entry");
const calculatorScreen = document.querySelector(".calculator-screen");

const updateEntry = (number, operator, number2) => {
  console.log(number2);
  if (operator === "") {
    calculatorEntry.value = number2;
  } else {
    if (number2 == "0") {
      calculatorEntry.value = number + ` ` + operator;
    } else {
      calculatorEntry.value = number + ` ` + operator + ` ` + number2;
    }
  }
};
// Akhir

const updateScreen = (number, operator, number2) => {
  if (number == "" && operator == "" && number2 == "0") {
    calculatorScreen.value = "";
  } else {
    calculatorScreen.value = number + ` ` + operator + ` ` + number2 + ` =`;
  }
};

// Input Number
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (result != "" && calculationOperator == "") {
      currentNumber = "";
      result = "";
    }
    // else if (result != "" && calculationOperator == "") {
    //   currentNumber = "";
    //   result = "";
    // }
    inputNumber(event.target.value);
    updateEntry(prevNumber, calculationOperator, currentNumber);
  });
});

const inputNumber = (number) => {
  currentNumber == "0" ? (currentNumber = number) : (currentNumber += number);
};
// Akhir

// Button Operator
const inputOperator = (operator) => {
  if (calculationOperator == "") {
    if (result == "") {
      prevNumber = currentNumber;
    } else {
      prevNumber = result;
    }
  }
  currentNumber = "0";
  calculationOperator = operator;
  updateEntry(prevNumber, calculationOperator, currentNumber);
};

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
// Akhir

// Button Proses
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  updateScreen(prevNumber, calculationOperator, currentNumber);
  cekPersen();
  calculate();
  updateEntry(prevNumber, calculationOperator, currentNumber);
  prevNumber = "";
});
// Akhir

// Perhitungan Calculator
const calculate = () => {
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      result = currentNumber;
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};
// Akhir

// Button Persen
const percenBtn = document.querySelector(".percentage");
percenBtn.addEventListener("click", (event) => {
  inputPersen(event.target.value);
  updateEntry(prevNumber, calculationOperator, currentNumber);
});
inputPersen = (persen) => {
  if (currentNumber.toString().includes("%")) {
    return;
  }
  currentNumber += persen;
};

const cekPersen = () => {
  if (currentNumber.toString().includes("%")) {
    persen1 = currentNumber.split("%");
    currentNumber = parseFloat(persen1[0] / 100);
  } else {
    currentNumber = currentNumber;
  }
  if (prevNumber.toString().includes("%")) {
    persen2 = prevNumber.split("%");
    prevNumber = parseFloat(persen2[0] / 100);
  } else {
    prevNumber = prevNumber;
  }
};
// Akhir

// Button Desimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateEntry(prevNumber, calculationOperator, currentNumber);
});
inputDecimal = (dot) => {
  if (currentNumber.toString().includes(".")) {
    return;
  }
  currentNumber += dot;
};
// Akhir

// Button AC
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateEntry(prevNumber, calculationOperator, currentNumber);
  updateScreen(prevNumber, calculationOperator, currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
  result = "";
};
// Akhir
