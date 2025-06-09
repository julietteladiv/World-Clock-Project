function displayTime() {
  let losAngelesElement = document.querySelector("#LosAngeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let LosAngelestime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = LosAngelestime.format("MMM Do YYYY");
    losAngelesTimeElement.innerHTML = LosAngelestime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let paristime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = paristime.format("MMM Do YYYY");

    parisTimeElement.innerHTML = paristime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
displayTime();
setInterval(displayTime, 1000);

function displayCity(event) {
  event.preventDefault();
  function refreshTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityDateElement = cityTime.format("MMM Do YYYY");
    let cityTimeElement = cityTime.format("h:mm:ss [<small>]A[</small>]");

    if (event.target.value.length > 0) {
      let newCity = document.querySelector("#cities");
      newCity.innerHTML = `<div class="city">
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityDateElement}</div>
          </div>
          <div class="time">${cityTimeElement}</div>
        </div>`;
    }
  }
  refreshTime();
  setInterval(refreshTime, 1000);
}

let selectElement = document.querySelector("#cityList");
selectElement.addEventListener("change", displayCity);
