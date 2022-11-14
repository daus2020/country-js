const details = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
const queryName = params.get("name");

let allData = JSON.parse(localStorage.getItem("allData"));
let countryCardTemplate = "";

const filterCountry = allData.filter((el) => {
  if (el.translations.spa.common === queryName) {
    const pais = el.translations.spa.common;

    const { currencies, languages } = el;

    console.log(Object.values(currencies));
    console.log(Object.keys(currencies));
    console.log(Object.keys(currencies)[0].name);
    console.log(Object.keys(currencies).name);
    // console.log(Object.values(currencies).name);
    console.log(Object.keys(currencies).length);
    // let currency = Object.keys(currencies).name;

    let currencyKeys = Object.keys(currencies);
    console.log(currencyKeys);
    // console.log(currencies["CLP"].name);
    // whatever the "index" it is, I need its .name
    let currencyName = currencyKeys.map((key) => currencies[key].name);
    let currencySymbol = currencyKeys.map((key) => currencies[key].symbol);
    console.log(currencyName);
    console.log(currencySymbol);

    let currency = currencyName;
    if (currency.length > 1) {
      currency = JSON.stringify(currencyName)
        .replace(/["\[\]]/g, "")
        .split(",")
        .join(", ");
    }

    let symbol = currencySymbol;
    if (symbol.length > 1) {
      symbol = JSON.stringify(currencySymbol)
        .replace(/["\[\]]/g, "")
        .split(",")
        .join(", ");
    }

    // let currency = JSON.stringify(currencyName)
    //   .replace(/["\[\]]/g, "")
    //   .split(",")
    //   .join(", ");

    // if (Object.keys(currencies).length !== 1) {
    // currency = Object.keys(currencies).name;

    // let currs = Object.keys(currencies);
    // let currsInWords = currs.map((index) => currencies[index].name);
    // currency = JSON.stringify(currsInWords)
    //   .replace(/["\[\]]/g, "")
    //   .split(",")
    //   .join(", ");
    // return currency;
    // }
    // let currency = Object.keys(currencies);
    console.log(currency);

    // let currsInWords = currency.map((index) => currencies[index].name);
    // console.log(currsInWords);
    // console.log(typeof currsInWords);
    // console.log(Object.values(currsInWords));
    // // console.log(Object.values(currsInWords).split(",").join(", "));

    // console.log(JSON.stringify(currsInWords));
    // console.log(JSON.stringify(currsInWords).replace(/["\[\]]/g, ""));
    // console.log(
    //   JSON.stringify(currsInWords)
    //     .replace(/["\[\]]/g, "")
    //     .split(",")
    //     .join(", ")
    // );

    // const keyCurrency = Object.keys(currencies)[0];
    // const currencyQuotes = JSON.stringify(el.currencies[keyCurrency].name);
    // const symbolCurrencyQuotes = JSON.stringify(
    //   el.currencies[keyCurrency].symbol
    // );

    // const currency = currencyQuotes.replace(/["]/g, ""); // just removing quotes

    // const symbol = symbolCurrencyQuotes.replace(/["]/g, ""); // just removing quotes

    // const keyLanguage = Object.keys(languages);
    // const keyLanguage = Object.keys(languages)[0];

    // only if Object.keys(languages).length > 1
    // const languageQuotes = JSON.stringify(el.languages[keyLanguage]);
    // const language = languageQuotes.replace(/["]/g, "");

    let language = Object.values(languages);

    // Only if country has more than one language
    if (language.length > 1) {
      language = JSON.stringify(language)
        .replace(/["\[\]]/g, "")
        .split(",")
        .join(", ");
    }

    // format population number with thousands separator (.)
    const population = new Intl.NumberFormat("de-DE").format(el.population);

    countryCardTemplate = `
        <div class="leftDetails">
          <img src="${el.flags.svg}" alt="country flag" class="flagInfo" />
        </div>
        <div className="inner">
          <div class="innerLeft">
            <h3>${pais}</h3>
            <p><b>Capital: </b> ${el.capital}</p>
            <p><b>Región: </b> ${el.region}</p>
            <p><b>Sub-región: </b> ${el.subregion}</p>
          </div>
          <div class="innerRight">
            <p><b>Población: </b> ${population}</p>
            <p><b>${
              language.length === 1 ? "Idioma" : "Idiomas"
            }: </b> ${language}</p>

            <p><b>${
              currency.length === 1 ? "Moneda" : "Monedas"
            }: </b> ${currency} </p>

            <p><b>${
              symbol.length === 1 ? "Símbolo moneda" : "Símbolos moneda"
            }: </b> ${symbol}</p>

            <p><b>Frontera(s): </b> ${el.borders}</p>
            <p><b>abr.cca3 : </b> ${el.cca3}</p>
          </div>
        </div>
          `;
  }
  details.innerHTML = countryCardTemplate;
});

// <p><b>Moneda(s): </b> ${Object.values(currsInWords)}</p>
