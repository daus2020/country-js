const countries = document.getElementById("countries");
const URL = "https://restcountries.com/v3.1/all";

document.addEventListener("DOMContentLoaded", () => {
  console.log("eventLoaded");

  let hasData = localStorage.getItem("allData");
  hasData ? countryCards(JSON.parse(hasData)) : fetchData();
  userCountryLetters(JSON.parse(hasData));
});

const fetchData = async () => {
  try {
    console.log("Hi fetchData");
    const res = await fetch(URL); // sending request
    const data = await res.json(); // converting data to json
    countryCards(data);
    console.log(data);
    localStorage.setItem("allData", JSON.stringify(data)); //store data in localstorage
  } catch (error) {
    console.log(error);
  }
};

const countryCards = (data) => {
  let cards = "";

  data.forEach((el) => {
    let population = new Intl.NumberFormat("de-DE").format(el.population);

    // let population = toLocaleString(el.population);
    console.log("localeString");
    // let population = new Intl.NumberFormat("de-DE").format(el.population);
    cards += `
    <a href="details.html?name=${el.translations.spa.common}"> 
      <article class="card">
        <img src="${el.flags.svg}" alt="country flag" class="flag" />
        <div class="info-card">
          <h3>${el.translations.spa.common}</h3>
          
          <p><b>Población: </b> <span>${population}</span></p>
          <p><b>Región: </b>${el.region}</span></p> 
          <p><b>Capital: </b> <span>${el.capital}</span></p> 
        </div>
      </article>
    </a>
    `;
  });
  countries.innerHTML = cards;
};
