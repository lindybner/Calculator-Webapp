// var
const display = document.getElementById("display");
const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnTimes = document.getElementById("btn-times");
const btnDiv = document.getElementById("btn-div");
const btnEq = document.getElementById("btn-eq");
const btnPt = document.getElementById("btn-pt");

// fn
const displayValue = (value) => {
  display.value += value;
};

const calculate = () => {
  try {
    // evaluate display value
    display.value = eval(display.value);
  } catch (error) {
    // display error
    display.value = "Error";
  }
};

// event listeners

// function appendValue(value) {
//   display.value += value;
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// function clearDisplay() {
//   display.value = "";
// }

// function deleteLastCharacter() {
//   display.value = display.value.slice(0, -1);
// }
