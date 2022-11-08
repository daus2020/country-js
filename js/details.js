// const { query } = require("express");

const details = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
const queryName = params.get("name");
console.log(queryName);

let allData = JSON.parse(localStorage.getItem("allData"));

const filterCountry = allData.filter((el) => {
  if (el.name.common === queryName) return el;
});

const countryCard = (country) => {
  let card = `
  <img src="${country.flags.svg}" alt="flag" class="flag-fluid" />
  <h3>${country.name.common}</h3>
  <p>
  <b>Population: </b> <span>${country.population}</span>
  <br />
  <b>Región: </b>${country.region}</span>
  <br />
  <b>Capital: </b> <span>${country.capital}</span>
  </p>
  `;

  details.innerHTML = card;
};

countryCard(filterCountry);
// console.log(el.name.common);

// const clickCard = () => {
//   let allData = JSON.parse(localStorage.getItem("data"));
//   const filterCountry = allData.filter((el) => {
//     // const apiRegion = el.name.common;
//     console.log(el.name.common);
//     if (el.name.common === "Barbados") {
//       return el;
//     }
//   });

//   countryCard(el);
// };

// document.addEventListener("DOMContentLoaded", (e) => {
//   fetchData();
// });
// // const data = localStorage.getItem("data");
// const fetchData = async () => {
//   try {
//     const res = await fetch("api.json");
//     const data = await res.json();
//     countryInfo(data);
//     console.log(data);
//     userCountryLetters(data);
//     localStorage.setItem("data", JSON.stringify(data));
//     userRegion(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const countryInfo = (data) => {
//   let elements = "";
//   data.forEach((el) => {
//     elements += `
//     <a href="details.html?name=${el.name.common}">
//       <article class="card">
//         <img src="${el.flags.svg}" alt="flag" class="flag-fluid" />
//         <h3>${el.name.common}</h3>
//         <p>
//           <b>Population: </b> <span>${el.population}</span>
//           <br />
//           <b>Región: </b>${el.region}</span>
//           <br />
//           <b>Capital: </b> <span>${el.capital}</span>
//         </p>
//       </article>
//     </a>
//     `;
//   });
//   countries.innerHTML = elements;
// };
