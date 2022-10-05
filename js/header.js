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
