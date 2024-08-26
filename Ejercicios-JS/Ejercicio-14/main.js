let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let edad = document.getElementById("inputEdad");
let btnShow = document.getElementById("btnShow");
let btnModal = document.querySelector("#btnModal")

let elementModal = document.getElementsByClassName("container-modal");
let elements = document.getElementsByClassName("container-form");
let body = document.querySelector("body");

var containerModal = elementModal[0];
var containerForm = elements[0];

let chistes1 = [
    "¿Por qué los programadores confunden Halloween con Navidad? Porque Oct 31 = Dec 25.",
    "¿Qué hace un matemático perdido en la jungla? Busca una log para resolver sus problemas.",
    "¿Cuál es el colmo de un electricista? Que su vida sea un cable de tensión.",
    "Mi relación con el café es como mi relación con el gimnasio: Pago por ella, pero no siempre la uso."];

let chistes2 = [
    "¿Qué le dice una célula madre a su hija? Haz lo que quieras, nena, pero diferénciate.",
    "Estaba tan ocupado que decidí delegar tareas… Pero terminé haciendo la lista de tareas de todos los demás.",
    "Mi idea de una noche salvaje a los 30: Café descafeinado después de las 8 pm.",
    "El matrimonio es como una partida de ajedrez: Siempre planeas tus movimientos con mucho cuidado, pero al final siempre gana el otro."
]

let chistes3 = [
    "A los 40 te das cuenta de que el tiempo es oro, y que las siestas son una excelente inversión.",
    "¿Cuál es el deporte más practicado a los 40? El salto de la cama al sofá.",
    "¿Sabes que has llegado a los 40 cuando...? El 'sin alcohol' no solo aplica a la cerveza, sino también a los planes de fin de semana.",
    "A los 40, ya no necesitas despertador. Te despiertan las ganas de ir al baño a las 6 am."
]
btnShow.addEventListener("click", ()=>{
    if (inputApellido.value != "" && inputNombre.value != "" && edad.value != "") {
        containerModal.showModal();
        let randomNum = Math.round(Math.random() * 3)
        let parrafo = document.getElementById("parrafo")
        if (edad.value <= 30) {
            parrafo.textContent = chistes1[randomNum];
        }
        else if(edad.value <= 40){
            parrafo.textContent = chistes2[randomNum];
        }
        else{
            parrafo.textContent = chistes3[randomNum];
        }
    }
    else{
        alert("Complete los campos por favor.")
    }
    inputNombre.value = "";
    inputApellido.value = "";
    edad.value = "";
});

btnModal.addEventListener("click", () =>{
    containerModal.close();
})