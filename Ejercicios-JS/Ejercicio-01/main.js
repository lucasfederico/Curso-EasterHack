let input1 = document.getElementById("input1");
let btnSave = document.getElementById("btn-save");

let btnShow = document.getElementById("btn-show")

let listaNumeros = []

// Evento Input
input1.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        let numParseado =  parseInt(input1.value)
        if (!isNaN(numParseado)) {
            listaNumeros.push(numParseado);
        }
        else{
            alert("Ingrese un numero valido")
        }
        input1.value = "";  
    }
   
})
// Evento boton
btnSave.addEventListener("click", ()=>{
    let numParseado =  parseInt(input1.value)
    if (!isNaN(numParseado)) {
        listaNumeros.push(numParseado);
    }
    else{
        alert("Ingrese un numero valido")
    }
    input1.value = "";
})

btnShow.addEventListener("click", ()=>{
    if (listaNumeros.length == 0) {
        alert("No hay numeros en la lista :C")
        return
    }
    let numMayor;
    let numMenor;
    listaNumeros.forEach((num, i)=>{
        if (i == 0){
            numMayor = num;
            numMenor = num;
        }
        if (num < numMenor) numMenor = num
        if (num > numMayor) numMayor = num
    })
    let parrafo = document.getElementById("result");
    parrafo.innerHTML = `El numero mayor es: ${numMayor} y el numero menor es: ${numMenor}`
})

