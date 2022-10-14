import myJson from "../data.json" assert { type: "json" };

// destination page

console.log("Script loaded tech page");

var techBtn1 = document.getElementById("techBtn1");
var techBtn2 = document.getElementById("techBtn2");
var techBtn3 = document.getElementById("techBtn3");

var techName = document.getElementById("techName");
var techDesc = document.getElementById("techDesc");
var techImg = document.getElementById("techImg");

function techData(techId) {
  techImg.src = myJson.technology[techId].images.portrait;
  techName.innerHTML = myJson.technology[techId].name;
  techDesc.innerHTML = myJson.technology[techId].description;
  techBtn1.classList.remove("tech-active");
  techBtn2.classList.remove("tech-active");
  techBtn3.classList.remove("tech-active");
}

window.addEventListener("load", techFunc);
function techFunc() {
  techBtn1.onclick = function () {
    techData(0);
    techBtn1.classList.add("tech-active");
  };
  techBtn2.onclick = function () {
    techData(1);
    techBtn2.classList.add("tech-active");
  };
  techBtn3.onclick = function () {
    techData(2);
    techBtn3.classList.add("tech-active");
  };
}
