let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");
let imagenMostrar = document.getElementById("imagenMostrar");

const abrirImg = (e) => {
  if (e.target.tagName == "IMG") {
    imagenMostrar.src = e.target.src;
    popup.style.display = "flex";
    overlay.style.display = "block";
  }
};

let cerrar = document.getElementById("cerrar");

document.addEventListener("click", abrirImg);

cerrar.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});
