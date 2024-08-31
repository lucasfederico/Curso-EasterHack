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
  let iconCategoria;
  if (tarea.tipo == "personal") {
    iconCategoria = "📝";
    
  }
  else if(tarea.tipo == "trabajo"){
    iconCategoria = "💼"
  }
  else if(tarea.tipo == "domestica"){
    iconCategoria = "🏠";
  }
  else if(tarea.tipo == "deporte"){
    iconCategoria = "⚽";
  }
  return `<li><div class="div">
                <p>${iconCategoria}</p>
            </div>
            <div class="div">
              <p><b>${tarea.titulo}</b></p>
            </div>
            
        <button onclick="cerrar(${i})">X</button></li>`;
}

// Evento crear Tarea
btn.addEventListener("click", () => {
  if (input1.value != "" && input2.value != "" && input3.value != "") {
    let tarea = {
      titulo: input1.value,
      descripcion: input2.value,
      tipo: input3.value,
    };
    listaTareas.push(tarea);
    renderizar();
    containerForm.style.display = "none";
    containerTareas.style.display = "flex";
  }
  else{
    alert("Complete los campos por favor.")
  }
  input1.value = "";
  input2.value = "";
  input3.value = "";
});
