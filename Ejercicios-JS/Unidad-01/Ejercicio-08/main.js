let input1 = document.getElementById("input1");
let btnShow = document.getElementById("btnShow");
let result = document.getElementById("result");

let mostrarResultado = () => {
  if (!input1.value == "") {
    let cuentaParseada = parseInt(input1.value);
    let propina = cuentaParseada * 0.15;

    result.innerHTML = `Usted debe pagar de propina ${propina}`;
  } else {
    alert("Ingrese el monto por favor.");
  }
  input1.value = "";
};
// EVENTO INPUT
input1.addEventListener("keydown", () => {
  if (event.key == "Enter") {
    mostrarResultado();
  }
});

// EVENTO BOTON
btnShow.addEventListener("click", mostrarResultado);
