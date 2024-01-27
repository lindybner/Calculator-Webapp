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
const btnClear = document.getElementById("btn-clear");
const btnLpar = document.getElementById("btn-lpar");
const btnRpar = document.getElementById("btn-rpar");
const btnDel = document.getElementById("btn-del");

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

const clearDisplay = () => {
  display.value = "";
  window.location.reload();
};

const backspace = () => {
  display.value = display.value.slice(0, -1);
};

// event listeners
btn0.addEventListener("click", () => displayValue("0"));
btn1.addEventListener("click", () => displayValue("1"));
btn2.addEventListener("click", () => displayValue("2"));
btn3.addEventListener("click", () => displayValue("3"));
btn4.addEventListener("click", () => displayValue("4"));
btn5.addEventListener("click", () => displayValue("5"));
btn6.addEventListener("click", () => displayValue("6"));
btn7.addEventListener("click", () => displayValue("7"));
btn8.addEventListener("click", () => displayValue("8"));
btn9.addEventListener("click", () => displayValue("9"));
btnPlus.addEventListener("click", () => displayValue("+"));
btnMinus.addEventListener("click", () => displayValue("-"));
btnTimes.addEventListener("click", () => displayValue("*"));
btnDiv.addEventListener("click", () => displayValue("/"));
btnPt.addEventListener("click", () => displayValue("."));
btnLpar.addEventListener("click", () => displayValue("("));
btnRpar.addEventListener("click", () => displayValue(")"));
btnDel.addEventListener("click", backspace);
btnEq.addEventListener("click", calculate);
btnClear.addEventListener("click", clearDisplay);

// keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Check if the pressed key is a valid input for the calculator
  const validInputs = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "(",
    ")",
    "Backspace",
    "Enter",
  ];

  if (validInputs.includes(key)) {
    event.preventDefault(); // Prevent default action for some keys

    if (key === "Backspace") {
      backspace();
    } else if (key === "Enter") {
      calculate();
    } else {
      displayValue(key);
    }
  }
});
