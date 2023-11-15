//seleciona o botão no HTML
const btn = document.querySelector(".btn");

const selectFrom = document.querySelector(".select-from");

const selectTo = document.querySelector(".select-to");

//recebe o valor do dolar atual
const dollarToday = 5.22;

//recebe o valor do euro atual
const euroToday = 6.22;

//seleciona o valor que foi digitado no input pelo usuario
const inputCoinValue = document.querySelector(".input");

const imgFrom = document.querySelector(".img-from");
const coinFromText = document.querySelector(".coin-from");
//seleciona o valor que será convertido (from)
const valueFromText = document.querySelector(".value-from");

const imgTo = document.querySelector(".img-to").src;
const coinToText = document.querySelector(".coin-to");
//seleciona o valor que foi convertido (to)
const valueToText = document.querySelector(".value-to");

//função para converter o valor
function convertValue() {
  //__SELECT FROM
  if (selectFrom.value == "brl") {
    //substitui o texto original, pelo valor do input digitado pelo usuario
    // e com a formatação da moeda
    valueFromText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCoinValue.value);
  } //__END __SELECT FROM

  //__SELCT TO
  if (selectTo.value == "euro") {
    //substitui o texto original, pelo valor convertido
    // e com a formatação da moeda
    valueToText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",

      //pega o valor do input e divide pelo valor do euro atual
    }).format(inputCoinValue.value / euroToday);
  }

  if (selectTo.value == "dollar") {
    //substitui o texto original, pelo valor convertido
    // e com a formatação da moeda
    valueToText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

      //pega o valor do input e divide pelo valor do dolar atual
    }).format(inputCoinValue.value / dollarToday);
  } //__END __SELECT TO
}

btn.addEventListener("click", convertValue);
selectFrom.addEventListener("change", changeCoin);
selectFrom.addEventListener("change", convertValue);
selectTo.addEventListener("change", convertValue);
selectTo.addEventListener("change", changeCoin);

function changeCoin() {
  //__SELECT FROM
  if (selectFrom.value == "0") {
    coinFromText.innerHTML = "Moeda";
    valueFromText.innerHTML = "Valor";
  }

  if (selectFrom.value == "brl") {
    coinFromText.innerHTML = "REAL";
  } //__END __SELECT FROM

  if (selectTo.value == "euro") {
    coinToText.innerHTML = "EURO";
  }

  if (selectTo.value == "dollar") {
    coinToText.innerHTML = "Dólar";
  } //__END __SELECT TO

  if (selectTo.value == "0") {
    console.log("TESTE");
    console.log(imgTo);
    imgTo.innerHTML = "src=./assets/image/euro.png";
  }
}
