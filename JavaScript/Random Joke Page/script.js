let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function appendJoke(joke) {
  let { value } = joke;
  let theJoke = JSON.stringify(value);
  jokeTextEl.textContent = theJoke;
}

function displayJoke(joke) {
  spinnerEl.classList.toggle("d-none");
  appendJoke(joke);
}

function getRequest(event) {
  jokeTextEl.textContent = "";
  spinnerEl.classList.toggle("d-none");

  let url = "https://apis.ccbp.in/jokes/random";
  let options = {
    method: "GET",
  };
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      let jokeData = jsonData;
      console.log(jokeData);
      displayJoke(jokeData);
    });
}

jokeBtnEl.addEventListener("click", getRequest);
