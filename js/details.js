const details = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
const queryName = params.get("name");

const allData = JSON.parse(localStorage.getItem("allData"));

console.log(allData);

// data indexed by cca3 with country name as values
const indexedByCca3 = allData.reduce((acc, el) => ({
  ...acc,
  [el.cca3]: el.translations.spa.common,
}), {});
console.log(indexedByCca3);

function getNameByCca3(myCca3) {
  // return indexedByCca3[myCca3].translations.spa.common // no idea why doesn't work
  return indexedByCca3[myCca3]
}

// let someArrayOfCca3 = [ 'ALB', 'CHL', 'ESH'] 

// const theNames = someArrayOfCca3.map(el => el)
// let theNames = someArrayOfCca3.map(el => getNameByCca3('CHL'))
// let theNames = someArrayOfCca3.map(key => getNameByCca3(key))
// console.log(theNames);
// console.log(getNameByCca3('MDV'));



let countryCardTemplate = "";

const filterCountry = allData.filter((el) => {
  if (el.translations.spa.common === queryName) {
    const pais = el.translations.spa.common;

    const { currencies, languages } = el;


    currencies ? mapKeys() : assignCurrenciesLanguages();
   
    function mapKeys() {
      console.log(Object.keys(currencies));
      let currencyKeys = Object.keys(currencies);

      // whatever the "index" it is, I need its .name
      let currencyName = currencyKeys.map((key) => currencies[key].name);
      let currencySymbol = currencyKeys.map((key) => currencies[key].symbol);
  
      let currency = currencyName;
      // Only if country has more than one currency
      if (currency.length > 1) {
        currency = JSON.stringify(currencyName)
          .replace(/["\[\]]/g, "")
          .split(",")
          .join(", ");
      }
  
      let symbol = currencySymbol;
      // Only if country has more than one currency
      if (symbol.length > 1) {
        symbol = JSON.stringify(currencySymbol)
          .replace(/["\[\]]/g, "")
          .split(",")
          .join(", ");
      }

      let language = Object.values(languages);
      // Only if country has more than one language
      if (language.length > 1) {
        language = JSON.stringify(language)
          .replace(/["\[\]]/g, "")
          .split(",")
          .join(", ");
      }

      printDetails(currency, symbol, language)
    }

    function assignCurrenciesLanguages() {
 
      // Hardcode for antartic (special case). There are 2 others countries without currencies (not cover).
      printDetails("Indefinida", "", "Indefinido")
    }

    
    function printDetails(currency, currencySymbol, lang) {
      
      // format population number with thousands separator (.)
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
            <p><b>Región: </b> ${el.continents}</p>
            <p><b>Sub-región: </b> ${el.subregion ? el.subregion : "Indefinida"}</p>
          </div>
          <div class="innerRight">
            <p><b>Población: </b> ${population}</p>
            <p><b>${
              lang.length === 1 ? "Idioma" : "Idiomas"
            }: </b> ${lang}</p>

            <p><b>${
              currency.length === 1 || currency === "Indefinida" ? "Moneda" : "Monedas"
            }: </b> ${ currency } </p>

            <p><b>${
              currencySymbol.length === 1 || currency === "Indefinida" ? "Símbolo moneda" : "Símbolos moneda"
            }: </b> ${currencySymbol}</p>

            <p><b>Fronteras: </b> ${el.borders ? el.borders.map((key => getNameByCca3(key))) : "Indefinida"}</p>
            </div>
            </div>
            `;
            
            details.innerHTML = countryCardTemplate;
          }
        }
      });
      
      
      // <p><b>Fronteras: </b> ${el.borders ? el.borders : "Indefinida"}</p>