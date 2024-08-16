let input1 = document.getElementById("input1");
let btnSave = document.getElementById("btnSave");
let input2 = document.getElementById("input2");
let btnShow = document.getElementById("btnShow");

let listaPalabras = [];

// Evento Enter
input1.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (input1.value == "") {
      alert("Ingrese una palabra por favor.");
      return;
    }
    listaPalabras.push(input1.value);
    input1.value = "";
  }
});

// Evento Boton
btnSave.addEventListener("click", () => {
  if (input1.value == "") {
    alert("Ingrese una palabra por favor.");
    return;
  }
  listaPalabras.push(input1.value);
  input1.value = "";
});

// FUNCION MOSTRAR RESULTADO
let mostrarResultado = () => {
  if (listaPalabras.length == 0) {
    alert("No hay palabras en la lista ;C");
    return;
  }
  if (input2.value == "" || input2.value.length != 1) {
    alert("Ingrese una letra por favor.");
    input2.value = "";
    return;
  }
  let palabrasN = 0;
  listaPalabras.forEach((palabra) => {
    if (palabra[0] == input2.value) {
      palabrasN++;
    }
  });
  let parrafo = document.getElementById("result");
  parrafo.innerHTML = `Hay ${palabrasN} palabras que empiezan con la letra ${input2.value}`;
  input2.value = "";
};

// EVENTOS ENTER Y BOTON

btnShow.addEventListener("click", mostrarResultado);
input2.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    mostrarResultado();
  }
});
