let btn = document.getElementById("btn");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")

btn.addEventListener("click", ()=>{
    container1.style.display = "none";
    let nombre = input1.value;
    let apellido = input2.value;
    let edad = input3.value;
    let saludo = `Hola ${nombre} ${apellido} de ${edad}`
    let parrafo = document.createElement("p");
    parrafo.style.fontWeight = "bold"
    parrafo.textContent = saludo
    container2.appendChild(parrafo);
})