var btnOpt = document.querySelectorAll(".btn-orange");
var result = document.querySelector(".result");
var numbers = document.querySelectorAll(".numbers");
var clear = document.querySelector(".clear");
var pro = document.querySelector(".pro");
var plusMinus = document.querySelector(".plusMinus");
var optState = false;
var opt = "";
var final = 0;

numbers.forEach((number) => {
  number.addEventListener("click", showNumber);

  function showNumber() {
    if (result.textContent == "0" || optState) {
      //0일 때 입력 안됨
      result.textContent = "";
    }
    result.textContent += this.textContent;
  }
});

btnOpt.forEach((operator) => {
  operator.addEventListener("click", calculator);

  function calculator() {
    optState = true;
    var newOpt = this.textContent;

    switch (opt) {
      case "+":
        result.textContent = final + Number(result.textContent);
        break;
      case "-":
        result.textContent = final - Number(result.textContent);
        break;
      case "*":
        result.textContent = final * Number(result.textContent);
        break;
      case "÷":
        result.textContent = final / Number(result.textContent);
        break;
    }

    final = Number(result.textContent);
    opt = newOpt;
  }
});
pro.addEventListener("click", function () {
  result.textContent = result.textContent / 100;
});
clear.addEventListener("click", function () {
  result.textContent = "0";
});

plusMinus.addEventListener("click", function () {
  if (Math.sign(result.textContent) == "-1") {
    //음수이면
    result.textContent = Math.abs(result.textContent);
  } else {
    result.textContent = -result.textContent;
  }
});
