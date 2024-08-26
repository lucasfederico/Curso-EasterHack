let temaChange = document.querySelector("#temaChange");
let body = document.querySelector("body");
let card = document.querySelector(".card")

temaChange.addEventListener("click",()=>{
    let currentBgColor = window.getComputedStyle(body).backgroundColor;
    if (currentBgColor == "rgb(255, 255, 255)") {
    body.style.backgroundColor = "#101418";
    body.style.color = "white";
    temaChange.textContent = "Modo Claro";
    card.style.color = "white";
    card.style.backgroundColor = "#202122"
    card.style.borderColor = "white"
    }
    else{
    body.style.backgroundColor = "white";
    body.style.color = "black";
    temaChange.textContent = "Modo Oscuro";
    card.style.color = "black";
    card.style.backgroundColor = "whitesmoke"
    card.style.borderColor = "black"
    }
})