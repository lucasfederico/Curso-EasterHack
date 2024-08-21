let input1 = document.getElementById("input1");
let btnTry = document.getElementById("btnTry");

let mostrarResultado = ()=>{

    let numParseado = parseInt(input1.value);
    if (input1.value != "" && !isNaN(numParseado) && (numParseado <= 10) && (numParseado >= 1)) {
        let numRandom = Math.floor(Math.random()*10 +1);
        if (numParseado != numRandom) {
            result.innerHTML = `Incorrecto el numero en que pense es ${numRandom}`;
        }
        else{
            result.innerHTML = `Acertaste! el numero que pense es ${numRandom}`;
        }
    }
    else{
        alert("Ingrese un numero del 1 al 10")
    }
    input1.value = ""
}

input1.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        mostrarResultado();
    }
})

btnTry.addEventListener("click", mostrarResultado);