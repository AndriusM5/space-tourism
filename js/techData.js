import myJson from "../data.json" assert { type: "json" };

// destination page

console.log("Script loaded tech page");

var techBtn1 = document.getElementById("techBtn1");
var techBtn2 = document.getElementById("techBtn2");
var techBtn3 = document.getElementById("techBtn3");

var techName = document.getElementById("techName");
var techDesc = document.getElementById("techDesc");
var techImg = document.getElementById("techImg");

var lastClickedBtnId = 0;

function techData(techId) {
  if (window.innerWidth >= 1200) {
    techImg.src = myJson.technology[techId].images.portrait;
  } else if (window.innerWidth >= 768) {
    techImg.src = myJson.technology[techId].images.landscape;
  }
  techName.innerHTML = myJson.technology[techId].name;
  techDesc.innerHTML = myJson.technology[techId].description;
  techBtn1.classList.remove("tech-active");
  techBtn2.classList.remove("tech-active");
  techBtn3.classList.remove("tech-active");
}

function changeImage(msg) {
  console.log(msg + " works");
  if (window.innerWidth >= 1200) {
    techImg.setAttribute(
      "src",
      myJson.technology[lastClickedBtnId].images.portrait
    );
  } else {
    techImg.setAttribute(
      "src",
      myJson.technology[lastClickedBtnId].images.landscape
    );
  }
}

window.addEventListener("resize", changeImage("Resize"));

// window.onresize = changeImage("Resize");

window.onload = changeImage("Load");

window.addEventListener("load", techFunc);
function techFunc() {
  techBtn1.onclick = function () {
    techData(0);
    techBtn1.classList.add("tech-active");
    lastClickedBtnId = 0;
  };
  techBtn2.onclick = function () {
    techData(1);
    techBtn2.classList.add("tech-active");
    lastClickedBtnId = 1;
  };
  techBtn3.onclick = function () {
    techData(2);
    techBtn3.classList.add("tech-active");
    lastClickedBtnId = 2;
  };
}
