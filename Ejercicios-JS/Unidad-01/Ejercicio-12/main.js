let inputEmail = document.querySelector("#inputEmail");
let btnGuardar = document.querySelector("#btnGuardar");
let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputCelular = document.querySelector("#inputCelular");

let guardarDatos = () =>{
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let email = inputEmail.value;
    let celular = inputCelular.value;
    if (nombre == "" || apellido == "" || celular == "" || email == "") {
        alert("Complete los campos por favor.")
        return
    }
    if(!email.includes("@") || !email.includes(".com")){
        alert("Ingrese un email valido");
        return
    }

    let array = [inputNombre, inputApellido, inputCelular, inputEmail];
    array.forEach((item)=>{
        item.value = ""
    })
}

//Evento Boton
btnGuardar.addEventListener("click", guardarDatos)