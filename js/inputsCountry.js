// const e = require("express");

const country = document.getElementById("country");
const inputCountry = document.getElementById("input-country");
let regions = document.getElementById("regions");

const userCountryLetters = (data) => {
  country.addEventListener("keyup", (e) => {
    e.preventDefault();
    regions.value = "all";
    // regions.innerText = "TODASSSS";
    regions.style.color = "#958c8c";

    const userLetters = inputCountry.value.toLowerCase();
    // console.log(userLetters);

    const filterLetters = data.filter((el) => {
      const apiLetter = el.name.common.toLowerCase();
      if (apiLetter.indexOf(userLetters) !== -1) {
        return el;
      }
    });
    countryCards(filterLetters);
    // console.log(filterLetters);
  });
};
