let imageToChange = document.querySelector(".home-logo");
var header = document.querySelector("#header");
let loading = document.getElementById("loading");
AOS.init();


window.addEventListener("load", () => {
  var deviceWidth = window.innerWidth;
  if (deviceWidth <= 600) {
    imageToChange.setAttribute("src", "./assets/images/mobile3.svg");
  }
});

window.addEventListener("resize", () => {
  var deviceWidth = window.innerWidth;
  if (deviceWidth <= 600) {
    imageToChange.setAttribute("src", "./assets/images/mobile3.svg");
  } else {
    imageToChange.setAttribute("src", "./assets/images/logo3.png");
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    header.style.backgroundColor = "#0E0E46";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

window.addEventListener("load", () => {
  loading.style.display = "none";
});
