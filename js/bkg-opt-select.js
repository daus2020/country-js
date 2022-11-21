// *** background select by region selected ***
const userRegion = () => {
  let regionColors = [
    "#958c8c",
    "#fff",
    "#f9a725",
    "#1fb71b",
    "#f9f725",
    "#c033a4",
    "#ed1d25",
  ];
  let index = document.getElementById("regions").selectedIndex;
  let regionColor = regionColors[index];
  let selected = document.getElementById("regions");
  selected.style.color = regionColor;
  let selectedRegion = document.getElementById("regions").value;

  document.getElementById("input-country").value = "";
  console.log(selectedRegion);

  // call data from localStorage (recorded when fetch api once)
  let allData = JSON.parse(localStorage.getItem("allData"));
  console.log(allData);

  const filterRegion = allData.filter((el) => {
    if (selectedRegion === "all") {
      return allData;
    }
    if (el.region === selectedRegion) {
      return el;
    }
  });

  countryCards(filterRegion);
};

