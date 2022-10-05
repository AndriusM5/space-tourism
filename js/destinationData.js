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

window.addEventListener("load", desFunc);
function desFunc() {
  moonBtn.onclick = function () {
    planet.src = myJson.destinations[0].images.webp;
    moonName.innerHTML = myJson.destinations[0].name;
    moonDesc.innerHTML = myJson.destinations[0].description;
    moonDistance.innerHTML = myJson.destinations[0].distance;
    estTravel.innerHTML = myJson.destinations[0].travel;
    moonBtn.classList.add("planet-navbar-active");
    marsBtn.classList.remove("planet-navbar-active");
    europaBtn.classList.remove("planet-navbar-active");
    titanBtn.classList.remove("planet-navbar-active");
  };
  marsBtn.onclick = function () {
    planet.src = myJson.destinations[1].images.webp;
    moonName.innerHTML = myJson.destinations[1].name;
    moonDesc.innerHTML = myJson.destinations[1].description;
    moonDistance.innerHTML = myJson.destinations[1].distance;
    estTravel.innerHTML = myJson.destinations[1].travel;
    moonBtn.classList.remove("planet-navbar-active");
    moonBtn.classList.remove("moon-btn");
    marsBtn.classList.add("planet-navbar-active");
    europaBtn.classList.remove("planet-navbar-active");
    titanBtn.classList.remove("planet-navbar-active");
  };
  europaBtn.onclick = function () {
    planet.src = myJson.destinations[2].images.webp;
    moonName.innerHTML = myJson.destinations[2].name;
    moonDesc.innerHTML = myJson.destinations[2].description;
    moonDistance.innerHTML = myJson.destinations[2].distance;
    estTravel.innerHTML = myJson.destinations[2].travel;
    moonBtn.classList.remove("planet-navbar-active");
    moonBtn.classList.remove("moon-btn");
    marsBtn.classList.remove("planet-navbar-active");
    europaBtn.classList.add("planet-navbar-active");
    titanBtn.classList.remove("planet-navbar-active");
  };
  titanBtn.onclick = function () {
    planet.src = myJson.destinations[3].images.webp;
    moonName.innerHTML = myJson.destinations[3].name;
    moonDesc.innerHTML = myJson.destinations[3].description;
    moonDistance.innerHTML = myJson.destinations[3].distance;
    estTravel.innerHTML = myJson.destinations[3].travel;
    moonBtn.classList.remove("planet-navbar-active");
    moonBtn.classList.remove("moon-btn");
    marsBtn.classList.remove("planet-navbar-active");
    europaBtn.classList.remove("planet-navbar-active");
    titanBtn.classList.add("planet-navbar-active");
  };
}
