function displayTime() {
  let losAngelesElement = document.querySelector("#LosAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let LosAngelestime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = LosAngelestime.format("MMM Do YYYY");
  losAngelesTimeElement.innerHTML = LosAngelestime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let paristime = moment().tz("Europe / paris");
  parisDateElement.innerHTML = paristime.format("MMM Do YYYY");

  parisTimeElement.innerHTML = paristime.format("h:mm:ss [<small>]A[</small>]");
}
displayTime();
setInterval(displayTime, 1000);
