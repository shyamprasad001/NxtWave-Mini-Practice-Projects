let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { flag, name, population } = result;
  resultCountriesEl.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-between"
  );
  let resultItem = document.createElement("div");
  resultItem.classList.add(
    "country-card",
    "d-flex",
    "flex-row",
    "col-12",
    "col-md-5"
  );

  let countryFlag = document.createElement("img");
  countryFlag.classList.add("country-flag", "mr-3");
  countryFlag.src = flag;
  resultItem.appendChild(countryFlag);

  let countryDetails = document.createElement("div");

  let countryName = document.createElement("h1");
  countryName.classList.add("country-name");
  countryName.textContent = name;
  countryDetails.appendChild(countryName);

  let countryPopulation = document.createElement("p");
  countryPopulation.classList.add("country-population");
  countryPopulation.textContent = population;
  countryDetails.appendChild(countryPopulation);

  resultItem.appendChild(countryDetails);
  resultCountriesEl.appendChild(resultItem);
}

function displaySeacrhResults(results) {
  resultCountriesEl.textContent = "";
  spinnerEl.classList.toggle("d-none");
  let searchInputVal = searchInputEl.value;

  for (let result of results) {
    let { flag, name, population } = result;
    let countryName = result.name;
    if (countryName.includes(searchInputVal)) {
      createAndAppendSearchResult(result);
    }
  }
}

spinnerEl.classList.toggle("d-none");
let url = "https://apis.ccbp.in/countries-data";
let options = {
  method: "GET",
};
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    displaySeacrhResults(jsonData);
  });

function searchCountries(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        displaySeacrhResults(jsonData);
      });
  }
}

searchInputEl.addEventListener("keydown", searchCountries);
