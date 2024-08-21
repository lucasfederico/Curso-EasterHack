let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btnGeneratePass = document.getElementById("btnGeneratePass");
let result = document.getElementById("result");

let crearPassword = ()=>{
    let contraseña = [];
    array = input1.value.split("");
    let digitos = parseInt(input2.value);
    for (let i = 0; i < digitos; i++) {
        let numRandom = Math.floor(Math.random() * array.length);
        contraseña.push(array[numRandom])
        
    }
    contraseña = contraseña.join("");
    result.innerHTML = `Tu contraseña es: ${contraseña}`
}

btnGeneratePass.addEventListener("click", crearPassword);