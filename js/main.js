const countries = document.getElementById("countries");
const URL = "https://restcountries.com/v3.1/all";

document.addEventListener("DOMContentLoaded", () => {
  let hasData = localStorage.getItem("allData");
  hasData ? countryCards(hasData) : fetchData();
  // fetchData();
});

const fetchData = async () => {
  try {
    console.log("Hi fetchData");
    const res = await fetch(URL); // sending request
    const data = await res.json(); // converting data to json
    countryCards(data);
    localStorage.setItem("allData", JSON.stringify(data)); //store data in localstorage
    // userCountryLetters(data);
    // userRegion(data);
    // clickCard(data);
  } catch (error) {
    console.log(error);
  }
};

const countryCards = (data) => {
  let cards = "";
  data.forEach((el) => {
    let population = new Intl.NumberFormat("de-DE").format(el.population);
    cards += `
    <a href="details.html?name=${el.name.common}"> 
      <article class="card">
        <img src="${el.flags.svg}" alt="country flag" class="flag-fluid" />
        <div class="info-card">
          <h3>${el.name.common}</h3>
          
          <p><b>Población: </b> <span>${population}</span>
          <b>Región: </b>${el.region}</span> 
          <b>Capital: </b> <span>${el.capital}</span></p> 
        </div>
      </article>
    </a>
    `;
  });
  countries.innerHTML = cards;
};
