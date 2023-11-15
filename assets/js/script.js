//___ .btn (HTML) = btn (JS)
const btn = document.querySelector(".btn");

//add event "click" .btn (HTML)
btn.addEventListener("click", convertValue);

//_____________________ PART FROM _____________________//
//___ .select-from (HTML) = selectFrom (JS)
const selectFrom = document.querySelector(".select-from");

//___ .img-from (HTML) = imgFrom (JS)
const imgFrom = document.querySelector(".img-from");

//___ .coin-from (HTML) =  coinFromText (JS)
const coinFromText = document.querySelector(".coin-from");

//___ .value-from (HTML) = valueFromText (JS)
const valueFromText = document.querySelector(".value-from");

//_____________________ PART TO _____________________//
//___ .select-to (HTML) = selectTo (JS)
const selectTo = document.querySelector(".select-to");

//___ .img-to (HTML) = imgTo (JS)
const imgTo = document.querySelector(".img-to");

//___ .coin-to (HTML) =  coinToText (JS)
const coinToText = document.querySelector(".coin-to");

//___ .value-to (HTML) = valueToText (JS)
const valueToText = document.querySelector(".value-to");

//Value dolar now
const dollarToday = 5.22;

//Value euro now
const euroToday = 6.22;

////___ .input (HTML) = inputCoinValue (JS)
const inputCoinValue = document.querySelector(".input");

//function Convert Value
function convertValue() {
  //___ SELECT FROM
  if (selectFrom.value == "brl") {
    valueFromText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCoinValue.value);
  }
  //___ END ___ SELECT FROM

  //___ SELECT TO
  if (selectTo.value == "euro") {
    valueToText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCoinValue.value / euroToday);
  }

  if (selectTo.value == "dollar") {
    valueToText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCoinValue.value / dollarToday);
  }
  //___ END ___ SELECT TO
}

//add event "change" item .select-from (HTML)
selectFrom.addEventListener("change", changeCoin);

//add event "change" item .select-to (HTML)
selectTo.addEventListener("change", changeCoin);

function changeCoin() {
  //___ SELECT FROM
  if (selectFrom.value == "0") {
    coinFromText.innerHTML = "Moeda";
    valueFromText.innerHTML = "Valor";
    imgFrom.src = "./assets/image/coin.png";
  }

  if (selectFrom.value == "brl") {
    coinFromText.innerHTML = "REAL";
    imgFrom.src = "./assets/image/brazil.png";
  }
  //___ END ___ SELECT FROM

  //___ SELECT TO
  if (selectTo.value == "0") {
    coinToText.innerHTML = "Moeda";
    valueToText.innerHTML = "Valor";
    imgTo.src = "./assets/image/coin.png";
  }

  if (selectTo.value == "euro") {
    coinToText.innerHTML = "EURO";
    imgTo.src = "./assets/image/euro.png";
  }

  if (selectTo.value == "dollar") {
    coinToText.innerHTML = "Dólar Americano";
    imgTo.src = "./assets/image/usa.png";
  }
  //___ END ___ SELECT TO

  convertValue();
}
