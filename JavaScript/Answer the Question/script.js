let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");

let selectedCapital = "";

cityHyderabadEl.addEventListener("change", function (event) {
  if (event.target.value !== "") {
    selectedCapital = event.target.value;
    console.log(selectedCapital);
  } else {
    selectedCapital = "";
  }
});

cityChennaiEl.addEventListener("change", function (event) {
  if (event.target.value !== "") {
    selectedCapital = event.target.value;
    console.log(selectedCapital);
  } else {
    selectedCapital = "";
  }
});
cityDelhiEl.addEventListener("change", function (event) {
  if (event.target.value !== "") {
    selectedCapital = event.target.value;
    console.log(selectedCapital);
  } else {
    selectedCapital = "";
  }
});

cityMumbaiEl.addEventListener("change", function (event) {
  if (event.target.value !== "") {
    selectedCapital = event.target.value;
    console.log(selectedCapital);
  } else {
    selectedCapital = "";
  }
});

cityHyderabadEl.addEventListener("change", function (event) {
  if (event.target.value !== "") {
    selectedCapital = event.target.value;
    console.log(selectedCapital);
  } else {
    selectedCapital = "";
  }
});

submitBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (selectedCapital === "") {
    resultMsgEl.textContent = "Please select the answer!";
  } else {
    if (selectedCapital === "Delhi") {
      resultMsgEl.textContent = "Correct answer";
    } else {
      resultMsgEl.textContent = "Wrong answer";
    }
  }
});
