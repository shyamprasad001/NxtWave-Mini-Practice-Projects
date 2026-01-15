let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { author, imageLink, title } = result;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  let imageEl = document.createElement("img");
  imageEl.classList.add("result-image");
  imageEl.src = imageLink;
  imageEl.alt = "book cover";
  resultItemEl.appendChild(imageEl);

  let authorEl = document.createElement("p");
  authorEl.classList.add("result-author");
  authorEl.textContent = author;
  resultItemEl.appendChild(authorEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.add("d-none");

  if (searchResults.length === 0) {
    let noResultsEl = document.createElement("p");
    noResultsEl.classList.add("no-results");
    noResultsEl.textContent = "No Results Found";
    searchResultsEl.appendChild(noResultsEl);
    return;
  } else {
    let headingEl = document.createElement("p");
    headingEl.classList.add("heading-title");
    headingEl.textContent = "Popular Books";
    searchResultsEl.appendChild(headingEl);

    for (let result of searchResults) {
      createAndAppendSearchResult(result);
    }
  }
}

function searchBook(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        console.log(search_results);
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchBook);
