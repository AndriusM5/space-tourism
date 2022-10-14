import myJson from "../data.json" assert { type: "json" };

// destination page

console.log("Script loaded destination page");

var moonBtn = document.getElementById("moon-btn");
var marsBtn = document.getElementById("mars-btn");
var europaBtn = document.getElementById("europa-btn");
var titanBtn = document.getElementById("titan-btn");

var planet = document.getElementById("planet-picture");
var moonName = document.getElementById("planet-name");
var moonDesc = document.getElementById("planet-desc");
var moonDistance = document.getElementById("planet-dis");
var estTravel = document.getElementById("planet-time");

function desData(planetId) {
  planet.src = myJson.destinations[planetId].images.webp;
  moonName.innerHTML = myJson.destinations[planetId].name;
  moonDesc.innerHTML = myJson.destinations[planetId].description;
  moonDistance.innerHTML = myJson.destinations[planetId].distance;
  estTravel.innerHTML = myJson.destinations[planetId].travel;
  moonBtn.classList.remove("planet-navbar-active");
  marsBtn.classList.remove("planet-navbar-active");
  europaBtn.classList.remove("planet-navbar-active");
  titanBtn.classList.remove("planet-navbar-active");
}

window.addEventListener("load", desFunc);
function desFunc() {
  moonBtn.onclick = function () {
    desData(0);
    moonBtn.classList.add("planet-navbar-active");
  };
  marsBtn.onclick = function () {
    desData(1);
    marsBtn.classList.add("planet-navbar-active");
  };
  europaBtn.onclick = function () {
    desData(2);
    europaBtn.classList.add("planet-navbar-active");
  };
  titanBtn.onclick = function () {
    desData(3);
    titanBtn.classList.add("planet-navbar-active");
  };
}
