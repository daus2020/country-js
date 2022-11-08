const countries = document.getElementById("countries");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});
// const data = localStorage.getItem("data");
const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    countryCards(data);
    console.log(data);
    userCountryLetters(data);
    // localStorage.setItem("data", JSON.stringify(data));
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
        <img src="${el.flags.svg}" alt="flag" class="flag-fluid" />
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
