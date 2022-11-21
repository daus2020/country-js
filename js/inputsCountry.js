const country = document.getElementById("country");
const inputCountry = document.getElementById("input-country");
let regions = document.getElementById("regions");

const userCountryLetters = (data) => {
  country.addEventListener("keyup", (e) => {
    e.preventDefault();
    regions.value = "all";
    regions.style.color = "#958c8c";

    // lettersEntered
    const lettersEntered = inputCountry.value.toLowerCase();

    const filterLetters = data.filter((el) => {
      const paisLetters = el.translations.spa.common.toLowerCase();
      console.log(paisLetters);

      if (paisLetters.indexOf(lettersEntered) !== -1) {
        return el;
      }
    });
    countryCards(filterLetters);
  });
};
