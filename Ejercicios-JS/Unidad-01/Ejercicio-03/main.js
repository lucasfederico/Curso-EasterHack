let input1 = document.getElementById("input1");
let btnSave = document.getElementById("btnSave");

let btnShow = document.getElementById("btnShow");

let listaPalabras = [];

let GuardarPalabra = () => {
  if (input1.value != "") {
    listaPalabras.push(input1.value);
  } else {
    alert("Ingrese una palabra por favor");
  }
  input1.value = "";
};
//Evento Boton
btnSave.addEventListener("click", GuardarPalabra);
input1.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    GuardarPalabra();
  }
});

let mostrarResultado = () => {
  if (listaPalabras.length != 0) {
    let palabraMasLarga = listaPalabras.reduce((acc, item) => {
      return item.length > acc.length ? item : acc;
    });

    let result = document.getElementById("result");
    result.innerHTML = `La palabra más larga es: ${palabraMasLarga}`
  }
};

btnShow.addEventListener("click", mostrarResultado)