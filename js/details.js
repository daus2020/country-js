const details = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
const queryName = params.get("name");

let allData = JSON.parse(localStorage.getItem("allData"));
let countryCardTemplate = "";

const filterCountry = allData.filter((el) => {
  if (el.translations.spa.common === queryName) {
    const pais = el.translations.spa.common;

    const { currencies, languages } = el;

    if (Object.hasOwn(el, 'currencies')) {
      console.log(Object.values(currencies));
      console.log(Object.keys(currencies));
      console.log(Object.keys(currencies)[0].name);  // undefined
      console.log(Object.keys(currencies).name);     // undefined
      // console.log(Object.values(currencies).name);
      console.log(Object.keys(currencies).length);
      // let currency = Object.keys(currencies).name;
    }
    console.log(el)

    // if (!(Object.hasOwn(el, 'currencies'))) {
    //   // Object.values(currencies) = [{0: {
    //   //   name: "Indefinido", symbol: ""
    //   // }
    //   // }]
    //   const source = 
    //   {
    //     currencies : {
    //       UDF :  
    //       {
    //         name: "Indefinido",
    //         symbol: " ",
    //       }
    //     }
    //   }
    //   const returnedTarget = Object.assign(el, source);
    //   console.log(el.currencies);
    //   console.log(el.currencies.UDF.name);
    //   console.log(el.currencies.UDF.symbol);
    //   console.log(el);
    //   // console.log(Object.values(currencies)); //cannot convert undefined ...
    //   // console.log(Object.values(currencies))
    // }
    console.log(el);
    console.log(el.currencies);
    // console.log(el.keys(currencies));

    currencies ? mapKeys() : assignCurrenciesLanguages();
    // if (currencies) {
    function mapKeys() {
      console.log(Object.keys(currencies));
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
      console.log(currency)

      let language = Object.values(languages);

      // Only if country has more than one language
      if (language.length > 1) {
        language = JSON.stringify(language)
          .replace(/["\[\]]/g, "")
          .split(",")
          .join(", ");
      }
      console.log(language)



      printDetails(currency, symbol, language)
    }

    function assignCurrenciesLanguages() {
      // const source = 
      // {
      //   borders : [],
      //   currencies : {
      //     UDF :  
      //     {
      //       name: "Indefinido",
      //       symbol: " ",
      //     }
      //   },
      //   languages : {
      //     udf : "Indefinido"
      //   }
      // }
      // const returnedTarget = Object.assign(el, source);
      // console.log(el.currencies);
      // console.log(el.currencies.UDF.name);
      // console.log(el.currencies.UDF.symbol);
      // console.log(el.languages.udf);
      // console.log(el);
      // Hardcode for antartic
      printDetails("Indefinida", "", "Indefinido")
    }
      // Object.hasOwn(el, 'UDF') ? console.log(el.currencies.UDF.name) : console.log(currency);
    // }
    
    // console.log(Object.keys(currencies));

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
    // console.log(currency);

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
    console.log(el)

    // format population number with thousands separator (.)
    
    function printDetails(currency, currSymbol, lang) {
      
      const population = new Intl.NumberFormat("de-DE").format(el.population);
      console.log(population)
      let countryCardTemplate = `
        <div class="leftDetails">
          <img src="${el.flags.svg}" alt="country flag" class="flagInfo" />
        </div>
        <div className="inner">
          <div class="innerLeft">
            <h3>${pais}</h3>
            <p><b>Capital: </b> ${el.capital}</p>
            <p><b>Región: </b> ${el.region}</p>
            <p><b>Sub-región: </b> ${el.subregion ? el.subregion : "Indefinida"}</p>
          </div>
          <div class="innerRight">
            <p><b>Población: </b> ${population}</p>
            <p><b>${
              lang.length === 1 ? "Idioma" : "Idiomas"
            }: </b> ${lang}</p>

            <p><b>${
              currency.length === 1 || currency === "Indefinida" ? "Moneda" : "Monedas"
              // currency.length === 1 || currencies ? "Moneda" : "Monedas"
            }: </b> ${ curr } </p>

            <p><b>${
              currSymbol.length === 1 || currency === "Indefinida" ? "Símbolo moneda" : "Símbolos moneda"
              // currSymbol.length === 1 || el.currencies ? "Símbolo moneda" : "Símbolos moneda"
            }: </b> ${currSymbol}</p>

            <p><b>Fronteras: </b> ${el.borders ? el.borders : "Indefinida"}</p>
          </div>
        </div>
          `;

      details.innerHTML = countryCardTemplate;
    }
  }
  // details.innerHTML = countryCardTemplate;
});

