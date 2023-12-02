//Value EURO now
const eurToday = 5.27;

//Value LIBRA now
const gbpToday = 6.04;

//Value BITCOIN now
const btcToday = 184017.53;

//Value REAL now
const realToday = 1;

//Value DOLLAR now
const usdToday = 4.86;

////___ .input (HTML) = inputCoinValue (JS)
const inputCoinValue = document.querySelector(".input");

//___ .btn (HTML) = btn (JS)
const btn = document.querySelector(".btn");

//add event "click" .btn (HTML)
btn.addEventListener("click", changeCoin);

//add event "click" .btn (HTML)
//btn.addEventListener("click");

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

//function Format Value
function formatValue() {
  //___ SELECT FROM
  if (selectFrom.value == "euro") {
    valueFromText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCoinValue.value);
  }

  if (selectFrom.value == "libra") {
    valueFromText.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCoinValue.value);
  }

  if (selectFrom.value == "bitcoin") {
    valueFromText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCoinValue.value);
  }

  if (selectFrom.value == "real") {
    valueFromText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCoinValue.value);
  }

  if (selectFrom.value == "dollar") {
    valueFromText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCoinValue.value);
  }
  //___ END ___ SELECT FROM

  /*
  //___ SELECT TO
  if (selectTo.value == "euro") {
    valueToText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valueToText);
  }

  if (selectTo.value == "libra") {
    valueToText.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valueToText);
  }

  if (selectTo.value == "bitcoin") {
    valueToText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC", //₿ ETH: "Ξ",
      minimumFractionDigits: 10,
    }).format(valueToText);
  }

  if (selectTo.value == "real") {
    valueToText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valueToText);
  }

  if (selectTo.value == "dollar") {
    const eua = inputCoinValue.value / usdToday;
    valueToText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valueToText);
  }
  //___ END ___ SELECT TO
  */
}

//add event "change" item .select-from (HTML)
selectFrom.addEventListener("change", changeCoin);

//add event "change" item .select-to (HTML)
selectTo.addEventListener("change", changeCoin);

function changeCoin() {
  formatValue();

  //___ SELECT FROM
  if (selectFrom.value == "0") {
    coinFromText.innerHTML = "Moeda";
    valueFromText.innerHTML = "Valor";
    imgFrom.src = "./assets/img/coin.png";
  }

  if (selectFrom.value == "euro") {
    coinFromText.innerHTML = "Euro";
    imgFrom.src = "./assets/img/euro.png";
  }

  if (selectFrom.value == "libra") {
    coinFromText.innerHTML = "Libra Esterlina";
    imgFrom.src = "./assets/img/gbp.png";
  }

  if (selectFrom.value == "bitcoin") {
    coinFromText.innerHTML = "Bitcoin";
    imgFrom.src = "./assets/img/bitcoin.png";
  }

  if (selectFrom.value == "real") {
    coinFromText.innerHTML = "REAL";
    imgFrom.src = "./assets/img/brazil.png";
  }

  if (selectFrom.value == "dollar") {
    coinFromText.innerHTML = "Dólar";
    imgFrom.src = "./assets/img/usa.png";
  }
  //___ END ___ SELECT FROM

  //___ SELECT TO
  if (selectTo.value == "0") {
    coinToText.innerHTML = "Moeda";
    valueToText.innerHTML = "Valor";
    imgTo.src = "./assets/img/coin.png";
  }

  if (selectTo.value == "euro") {
    coinToText.innerHTML = "Euro";
    imgTo.src = "./assets/img/euro.png";
    const euro = inputCoinValue.value / eurToday;
    valueToText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(euro);
  }

  if (selectTo.value == "libra") {
    coinToText.innerHTML = "Libra Esterlina";
    imgTo.src = "./assets/img/gbp.png";
    const libra = inputCoinValue.value / gbpToday;
    valueToText.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(libra);
  }

  if (selectTo.value == "bitcoin") {
    coinToText.innerHTML = "Bitcoin";
    imgTo.src = "./assets/img/bitcoin.png";
    const bitcoin = inputCoinValue.value / btcToday;
    valueToText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC", //₿ ETH: "Ξ",
      minimumFractionDigits: 10,
    }).format(bitcoin);
  }

  if (selectTo.value == "real") {
    coinToText.innerHTML = "Real";
    imgTo.src = "./assets/img/brazil.png";
    const real = inputCoinValue.value / realToday;
    valueToText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(real);
  }

  if (selectTo.value == "dollar") {
    coinToText.innerHTML = "Dólar Americano";
    imgTo.src = "./assets/img/usa.png";
    const dollar = inputCoinValue.value / usdToday;
    valueToText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(dollar);
  }
  //___ END ___ SELECT TO
}

///buscar ou pensar na solução
//add event "click" .btn (HTML)
btn.addEventListener("click", calcMany);

function calcMany() {
  if (selectFrom.value == "real") {
    //___ SELECT TO
    if (selectTo.value == "euro") {
      const euro = inputCoinValue.value / eurToday;
      valueToText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(euro);
    }

    if (selectTo.value == "libra") {
      const libra = inputCoinValue.value / gbpToday;
      valueToText.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(libra);
    }

    if (selectTo.value == "bitcoin") {
      const bitcoin = inputCoinValue.value / btcToday;
      valueToText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC", //₿ ETH: "Ξ",
        minimumFractionDigits: 10,
      }).format(bitcoin);
    }

    if (selectTo.value == "real") {
      const real = inputCoinValue.value / realToday;
      valueToText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(real);
    }

    if (selectTo.value == "dollar") {
      const dollar = inputCoinValue.value / usdToday;
      valueToText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(dollar);
    }
    //___ END ___ SELECT TO
  }
}
