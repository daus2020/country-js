const details = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
const queryName = params.get("name");

let allData = JSON.parse(localStorage.getItem("allData"));
let printCountry = "";

const filterCountry = allData.filter((el) => {
  if (el.name.common === queryName) {
    const countryName = el.name.common;

    const { currencies, languages } = el;

    const keyCurrency = Object.keys(currencies)[0];
    const currencyQuotes = JSON.stringify(el.currencies[keyCurrency].name);
    const currency = currencyQuotes.replace(/["]/g, "");

    const keyLanguage = Object.keys(languages)[0];
    const languageQuotes = JSON.stringify(el.languages[keyLanguage]);
    const language = languageQuotes.replace(/["]/g, "");
    console.log(language);

    const population = new Intl.NumberFormat("de-DE").format(el.population);

    console.log(typeof currency);

    printCountry = `
      <div class="countryInfo">
        <div class="leftDetails">
          <img src="${el.flags.svg}" alt="country flag" class="flagInfo" />
        </div>
        <div class="innerLeft">
          <h3>${countryName}</h3>
          <p><b>Capital: </b> ${el.capital}</p>
          <p><b>Región: </b> ${el.region}</p>
          <p><b>Sub-región: </b> ${el.subregion}</p>
        </div>
        <div class="innerRight">
          <p><b>Population: </b> ${population}</p>
          <p><b>Moneda: </b> ${currency}</p>
          <p><b>Idioma: </b> ${language}</p>
          <p><b>Fifa: </b> ${el.fifa}</p>
        </div>
      <div>
          `;
  }
  details.innerHTML = printCountry;
});
