let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function displayFact(numberFact) {
  spinnerEl.classList.toggle("d-none");
  let { fact } = numberFact;
  factEl.textContent = fact;
}

function getFacts(event) {
  if (event.key === "Enter") {
    let userInputVal = userInputEl.value;
    if (userInputVal === "") {
      alert("enter a number");
      return;
    } else {
      spinnerEl.classList.toggle("d-none");
      factEl.textContent = "";
      let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
      let options = {
        method: "GET",
      };
      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (JsonData) {
          console.log(JsonData);
          displayFact(JsonData);
        });
    }
  }
}

userInputEl.addEventListener("keydown", getFacts);
