// const e = require("express");

const country = document.getElementById("country");
const inputCountry = document.getElementById("input-country");
let regions = document.getElementById("regions");

const userCountry = (data) => {
  country.addEventListener("keyup", (e) => {
    e.preventDefault();
    regions.value = "all";
    regions.style.color = "#f5f5f5";

    const userLetter = inputCountry.value.toLowerCase();
    // console.log(userLetter);

    const filterLetters = data.filter((el) => {
      const apiLetter = el.name.common.toLowerCase();
      if (apiLetter.indexOf(userLetter) !== -1) {
        return el;
      }
    });
    countryInfo(filterLetters);
    // console.log(filterLetters);
  });
};
