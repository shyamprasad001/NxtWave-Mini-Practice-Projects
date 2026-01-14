let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let submitBtnEl = document.getElementById("submitBtn");

siteNameInputEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteNameErrMsgEl.textContent = "Required*";
  } else {
    siteNameErrMsgEl.textContent = "";
  }
});

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

siteUrlInputEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteUrlErrMsgEl.textContent = "Required*";
  } else {
    siteUrlErrMsgEl.textContent = "";
  }
});

let bookmarksListEl = document.getElementById("bookmarksList");

function formValidations() {
  if (siteNameInputEl.value === "") {
    siteNameErrMsgEl.textContent = "Required*";
  } else {
    siteNameErrMsgEl.textContent = "";
  }
  if (siteUrlInputEl.value === "") {
    siteUrlErrMsgEl.textContent = "Required*";
  } else {
    siteUrlErrMsgEl.textContent = "";
  }
}

function addBookmark() {
  let bookmarkItem = document.createElement("li");
  bookmarkItem.classList.add("bookmark-container", "li-item");

  let bookmarkTitleEl = document.createElement("h1");
  bookmarkTitleEl.classList.add("bookmark-title");
  bookmarkTitleEl.textContent = siteNameInputEl.value;
  bookmarkItem.appendChild(bookmarkTitleEl);

  let bookmarkUrlEl = document.createElement("a");
  bookmarkUrlEl.href = siteUrlInputEl.value;
  bookmarkUrlEl.target = "_blank";
  bookmarkUrlEl.textContent = siteUrlInputEl.value;
  bookmarkItem.appendChild(bookmarkUrlEl);

  bookmarksListEl.appendChild(bookmarkItem);
}

bookmarkFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidations();
  addBookmark();
});
