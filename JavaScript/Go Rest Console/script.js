let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

function getRequest() {
  let options = {
    method: requestMethodEl.value,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer f358899eb1c419f2cc3148ac12423fffb9f823d8773f971fb71e10dabcfa1b85",
    },
    body: requestBodyEl.value,
  };
  fetch(requestUrlEl.value, options)
    .then(function (respoonse) {
      return respoonse.json();
    })
    .then(function (JsonData) {
      let responseStatus = JsonData.code;
      let responseData = JSON.stringify(JsonData);

      responseStatusEl.value = responseStatus;
      responseBodyEl.value = responseData;
    });
}

requestUrlEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    requestUrlErrMsgEl.textContent = "Required*";
  } else {
    requestUrlErrMsgEl.textContent = "";
  }
  requestUrlEl.value = event.target.value;
});

requestMethodEl.addEventListener("change", function (event) {
  requestMethodEl.value = event.target.value;
});

requestBodyEl.addEventListener("change", function (event) {
  requestBodyEl.value = event.target.value;
});

consoleFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  if (requestUrlEl.value === "") {
    requestUrlErrMsgEl.textContent = "Required*";
  } else {
    requestUrlErrMsgEl.textContent = "";
    getRequest();
  }
});
