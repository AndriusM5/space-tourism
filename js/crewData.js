import myJson from "../data.json" assert { type: "json" };

// destination page

console.log("Script loaded destination page");

var radioBtn1 = document.getElementById("radio-one");
var radioBtn2 = document.getElementById("radio-two");
var radioBtn3 = document.getElementById("radio-three");
var radioBtn4 = document.getElementById("radio-four");

var role = document.getElementById("crewRole");
var crewName = document.getElementById("crewName");
var crewBio = document.getElementById("crewBio");
var crewImg = document.getElementById("crewImg");

function crewData(crewId) {
  crewImg.src = myJson.crew[crewId].images.webp;
  crewName.innerHTML = myJson.crew[crewId].name;
  crewBio.innerHTML = myJson.crew[crewId].bio;
  role.innerHTML = myJson.crew[crewId].role;
}

// window.addEventListener("click", crewFunc);
// function crewFunc() {
//   if (radioBtn1.checked) {
//     crewData(0);
//   } else if (radioBtn2.checked) {
//     crewData(1);
//   } else if (radioBtn3.checked) {
//     crewData(2);
//   } else if (radioBtn4.checked) {
//     crewData(3);
//   }
// }

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 200,
  loop: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 2,
  },
});
