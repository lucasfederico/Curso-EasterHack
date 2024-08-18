let popup = document.querySelector("#popup");
let btn = document.querySelector("#btn-create");
let input1 = document.querySelector("#titulo");
let input2 = document.querySelector("#descripcion");
let input3 = document.querySelector("#tipo");

let containerForm = document.querySelector(".container-form");
let containerTareas = document.querySelector("#containerTareas")
let lista = document.querySelector("#lista");

let listaTareas = [];

function cerrar(i) {
  listaTareas.splice(i, 1);
  renderizar();
}

// FUNCION RENDERIZAR LISTA
let renderizar = () => {
  lista.innerHTML = listaTareas
    .map((item, index) => {
      return crearItem(item, index);
    })
    .join("");
};
// Evento mostrar formulario
popup.addEventListener("click", () => {
  lista.innerHTML = "";
  containerForm.style.display = "flex";
  containerTareas.style.display = "none";
});

function crearItem(tarea, i) {
  return `<li><div class="div">
                <h6>${tarea.titulo}</h6>
            </div>
          <div>
            <p>${tarea.descripcion}</p>
        </div>
          <div>
            <p>${tarea.tipo}</p>
        </div>
        <button onclick="cerrar(${i})">X</button></li>`;
}

// Evento crear Tarea
btn.addEventListener("click", () => {
  let tarea = {
    titulo: input1.value,
    descripcion: input2.value,
    tipo: input3.value,
  };
  listaTareas.push(tarea);
  renderizar();
  containerForm.style.display = "none";
  containerTareas.style.display = "flex";
});
