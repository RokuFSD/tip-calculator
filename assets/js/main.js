const mainApp = document.getElementById("tip");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 720) {
    mainApp.classList.remove("rounded-top");
    mainApp.classList.add("rounded");
  } else {
    mainApp.classList.add("rounded-top");
    mainApp.classList.remove("rounded");
  }
});
