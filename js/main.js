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
    let population = new Intl.NumberFormat("de-DE").format(el.population);
    cards += `
    <a href="details.html?name=${el.name.common}"> 
      <article class="card">
        <img src="${el.flags.svg}" alt="country flag" class="flag-fluid" />
        <div class="info-card">
          <h3>${el.name.common}</h3>
          <p><b>Población: </b> <span>${population}</span> </p>
          <p><b>Región: </b>${el.region}</span></p> 
          <p><b>Capital: </b> <span>${el.capital}</span></p> 
        </div>
      </article>
    </a>
    `;
  });
  countries.innerHTML = cards;
};
