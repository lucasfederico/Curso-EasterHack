let btnShow = document.getElementById("btnShow");
let btnNoShow = document.getElementById("btnNoShow");
let imgSquirtle = document.getElementById("imgSquirtle");

btnShow.addEventListener("click", () => {
  imgSquirtle.style.width = "700px";
  btnShow.style.display = "none";
  btnNoShow.style.display = "block"
});

btnNoShow.addEventListener("click", () => {
    imgSquirtle.style.width = "200px";
    btnNoShow.style.display = "none";
    btnShow.style.display = "block"
  });