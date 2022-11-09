const countries = document.getElementById("countries");
const URL = "https://restcountries.com/v3.1/all";

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch(URL); // sending request
    const data = await res.json(); // converting data to json
    localStorage.setItem("allData", JSON.stringify(data)); //store data in localstorage
    countryCards(data);
    console.log(data);
    userCountryLetters(data);
    userRegion(data);
    // clickCard(data);
  } catch (error) {
    console.log(error);
  }
};

const countryCards = (data) => {
  let cards = "";
  data.forEach((el) => {
    cards += `
    <a href="details.html?name=${el.name.common}"> 
      <article class="card">
        <img src="${el.flags.svg}" alt="country flag" class="flag-fluid" />
        <h3>${el.name.common}</h3>
        <p>
          <b>Population: </b> <span>${el.population}</span>
          <br />
          <b>Región: </b>${el.region}</span>
          <br />
          <b>Capital: </b> <span>${el.capital}</span>
        </p>
      </article>
    </a>
    `;
  });
  countries.innerHTML = cards;
};
