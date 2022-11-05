// const e = require("express");

const country = document.getElementById("country");
const inputCountry = document.getElementById("input-country");

const userCountry = (data) => {
  country.addEventListener("keyup", (e) => {
    e.preventDefault();
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
