const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const custom = document.querySelector(".tip-custom");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector(".total");
const tips = document.querySelectorAll(".tips");

const amount = document.querySelector(".amount");
const totalAmount = document.getElementById("total-amount");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset");

let percent = 0;

billInput.addEventListener("input", function () {
  empty();
  calculation();
});
peopleInput.addEventListener("input", function () {
  empty();
  calculation();
});

custom.addEventListener("input", function () {
  percent = parseFloat(custom.value);
  tips.forEach(function (value) {
    value.classList.remove("active-tip");
  });
  empty();
  calculation();
});
reset.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";
  custom.value = "";
  percent = 0;
  calculation();
  empty();
  tipAmount.innerHTML = "$" + (0.0).toFixed(2);
  totalAmount.innerHTML = "$" + (0.0).toFixed(2);
});

function calculation() {
  if (peopleInput.value >= 1) {
    const tip = (billInput.value * percent) / 100;

    let divade = tip / peopleInput.value;

    let total = (+billInput.value + tip) / peopleInput.value;
    tipAmount.innerHTML = "$" + divade.toFixed(2);
    totalAmount.innerHTML = "$" + total.toFixed(2);
  }
}
function empty() {
  if (peopleInput.value == "0") {
    error.style.color = "#ff0000";
    peopleInput.style.outline = "2px solid #ff0000";
  } else {
    error.style.color = "transparent";
    peopleInput.style.outline = "none";
  }
}

tips.forEach(function (val) {
  val.addEventListener("click", function () {
    val.classList.remove("active-tip");

    val.classList.add("active-tip");
    percent = parseInt(val.textContent);
    console.log(val.textContent);
    calculation();
  });
});
