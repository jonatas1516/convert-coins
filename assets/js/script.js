const btn = document.querySelector(".btn");

function convertValue() {
  const inputCoinValue = document.querySelector(".input").value;

  const dollarToday = 5.22;

  const convertedValue = inputCoinValue / dollarToday;

  console.log(convertedValue);
}

btn.addEventListener("click", convertValue);
