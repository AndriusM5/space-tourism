// header

console.log("Script loaded nav bar");

var navLinks = document.getElementById("nav-links");
var homeNavBtn = document.getElementById("home-nav-btn");
var destNavBtn = document.getElementById("dest-nav-btn");
var crewNavBtn = document.getElementById("crew-nav-btn");
var techNavBtn = document.getElementById("tech-nav-btn");

homeNavBtn.classList.add("nav-btn-active");
if (window.location.href.indexOf("index") != -1) {
  homeNavBtn.classList.add("nav-btn-active");
} else if (window.location.href.indexOf("destination") != -1) {
  destNavBtn.classList.add("nav-btn-active");
  homeNavBtn.classList.remove("nav-btn-active");
} else if (window.location.href.indexOf("crew") != -1) {
  crewNavBtn.classList.add("nav-btn-active");
  homeNavBtn.classList.remove("nav-btn-active");
} else if (window.location.href.indexOf("technology") != -1) {
  techNavBtn.classList.add("nav-btn-active");
  homeNavBtn.classList.remove("nav-btn-active");
}

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
    planet.src = "assets/destination/image-moon.webp";
    moonName.innerHTML = "MOON";
    moonDesc.innerHTML =
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    moonDistance.innerHTML = "384,400 km";
    estTravel.innerHTML = "3 DAYS";
    moonBtn.classList.add("planet-navbar-active");
    marsBtn.classList.remove("planet-navbar-active");
    europaBtn.classList.remove("planet-navbar-active");
    titanBtn.classList.remove("planet-navbar-active");
  };
  marsBtn.onclick = function () {
    planet.src = "assets/destination/image-mars.webp";
    moonName.innerHTML = "MARS";
    moonDesc.innerHTML =
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    moonDistance.innerHTML = "225 MIL. km";
    estTravel.innerHTML = "9 MONTHS";
    moonBtn.classList.remove("planet-navbar-active");
    moonBtn.classList.remove("moon-btn");
    marsBtn.classList.add("planet-navbar-active");
    europaBtn.classList.remove("planet-navbar-active");
    titanBtn.classList.remove("planet-navbar-active");
  };
  europaBtn.onclick = function () {
    planet.src = "assets/destination/image-europa.webp";
    moonName.innerHTML = "EUROPA";
    moonDesc.innerHTML =
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    moonDistance.innerHTML = "628 MIL. km";
    estTravel.innerHTML = "3 YEARS";
    moonBtn.classList.remove("planet-navbar-active");
    moonBtn.classList.remove("moon-btn");
    marsBtn.classList.remove("planet-navbar-active");
    europaBtn.classList.add("planet-navbar-active");
    titanBtn.classList.remove("planet-navbar-active");
  };
  titanBtn.onclick = function () {
    planet.src = "assets/destination/image-titan.webp";
    moonName.innerHTML = "TITAN";
    moonDesc.innerHTML =
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    moonDistance.innerHTML = "1.6 BIL. km";
    estTravel.innerHTML = "7 YEARS";
    moonBtn.classList.remove("planet-navbar-active");
    moonBtn.classList.remove("moon-btn");
    marsBtn.classList.remove("planet-navbar-active");
    europaBtn.classList.remove("planet-navbar-active");
    titanBtn.classList.add("planet-navbar-active");
  };
}
