let input1 = document.getElementById("input1");
let btnShow = document.getElementById("btnShow");
let saludo = document.getElementById("saludo");

let mostrarSaludo = ()=>{
    if (input1.value != "") {
        saludo.innerHTML = `Hola ${input1.value} como andaas`;
        input1.value = ""
    }
    else{
        alert("Ingresa tu nombre por favor.")
    }
}
//EVENTO INPUT
input1.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        mostrarSaludo();
    }
})

//EVENTO BOTON
btnShow.addEventListener("click", mostrarSaludo);