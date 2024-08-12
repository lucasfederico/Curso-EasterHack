let popup = document.querySelector("#popup")

let btn = document.querySelector("#btn-create");
let input1 = document.querySelector("#titulo");
let input2 = document.querySelector("#descripcion");
let input3 = document.querySelector("#tipo");

let containerForm = document.querySelector(".container-form");
let lista = document.querySelector("#lista");

let listaTareas = [];

function cerrar(){
  
}
// Evento mostrar formulario
popup.addEventListener("click", ()=>{
  lista.innerHTML ="";
  containerForm.style.display = "flex";
});

function crearItem(tarea) {
  lista.innerHTML += `<li><div class="div">
                <h6>${tarea.titulo}</h6>
            </div>
          <div>
            <p>${tarea.descripcion}</p>
        </div>
          <div>
            <p>${tarea.tipo}</p>
        </div>
        <button onclick="cerrar()">X</button></li>`;
}

// Evento crear Tarea
btn.addEventListener("click", () => {
  let tarea = {
    titulo: input1.value,
    descripcion: input2.value,
    tipo: input3.value,
  };
  listaTareas.push(tarea);
  listaTareas.map((item) => {
    crearItem(item);
  });
  containerForm.style.display = "none"
});
