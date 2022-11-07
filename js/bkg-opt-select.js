// *** background select by region selected ***
const userRegion = (data) => {
  // const userRegion = (data) => {
  let regionColors = [
    "#f5f5f5",
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
  // selected.style.border = color;
  let selectedRegion = document.getElementById("regions").value;
  console.log(selectedRegion);

  console.log(data);
  let allData = JSON.parse(localStorage.getItem("data"));
  const filterRegion = allData.filter((el) => {
    const apiRegion = el.region;
    if (selectedRegion === "all") {
      return allData;
    }
    if (apiRegion === selectedRegion) {
      return el;
    }
  });
  countryInfo(filterRegion);
};
// console.log(filterLetters);

// let valueSelected =
// let selectedRegion = document.getElementById("regions").text;
// console.log(selectedRegion);

// *** Option selected logic

// function setColorSelect() {
//   let colors = ["#fff", "#f9a725", "#1fb71b", "#f9f725", "#c033a4", "#ed1d25"];
//   let index = document.getElementById("regions").selectedIndex;
//   let color = colors[index];
//   let selected = document.getElementById("regions");
//   selected.style.color = color;
// }

// let selectRegions = document.getElementById("regions");
// selectRegions.addEventListener('click', function(el) {
//   let option = this.children
//   let colors = [ '#fff', '#f9a725', '#1fb71b', '#f9f725', '#ab6f21', '#ed1d25' ]
//   for(let i=)
// })

// #regions option[value='Americas'] {
//   background: #f9a725;
// }

// #regions option[value='Africa'] {
//   background-color:'#1fb71b'
// }

// #regions option[value='Asia'] {
//   background:'#f9f725'
// }

// #regions option[value='Oceania'] {
//   background:'#ab6f21'
// }

// #regions option[value='Europe'] {
//   background:'#ed1d25'
// }

// function ChangedSelection()
// {
// var x = document.getElementById("mySelect").selectedIndex;
// var color =document.getElementsByTagName("option")[x].value;
// var y = document.getElementById("mySelect");
// y.style.color=color;
// }
// <select id="mySelect" onchange="ChangedSelection()" style="Color:red;">
//     <option value="red" selected="selected">Red</option>
//     <option value="blue">Blue</option>
//     <option value="Green">Green</option>
//     <option value="Yellow">Yellow</option>
// </select>
