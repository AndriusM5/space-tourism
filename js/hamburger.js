console.log("ham loaded");

var hamBtn = document.getElementById("toggle-hamburger");
var navLinks = document.getElementById("nav-links");

window.addEventListener("load", hamFunc);
function hamFunc() {
  hamBtn.onclick = function () {
    if (navLinks.style.visibility == "visible") {
      navLinks.style.visibility = "hidden";
      hamBtn.style.background = "url('./assets/shared/icon-hamburger.svg')";
      hamBtn.style.width = "24px";
      hamBtn.style.height = "21px";
    } else {
      navLinks.style.visibility = "visible";
      hamBtn.style.background = "url('./assets/shared/icon-close.svg')";
      hamBtn.style.width = "19px";
      hamBtn.style.height = "19px";
    }
  };
}
