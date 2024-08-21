let buscador = document.getElementById("buscador");

let item1 = {
    imagen : "https://i.blogs.es/ecbf27/audino/1366_2000.png",
    categoria : "psiquico"
}
let item2 = {
    imagen : "https://i.blogs.es/c8490c/bulbasaur/1366_2000.png",
    categoria : "planta"
}
let item3 = {
    imagen : "https://i.blogs.es/da6c4d/azurill/1366_2000.png",
    categoria : "agua"
}
let item4 = {
    imagen : "https://i.blogs.es/2c2db9/bellossom/1366_2000.png",
    categoria : "planta"
}
let item5 = {
    imagen : "https://i.blogs.es/2d761a/bewear/1366_2000.png",
    categoria : "psiquico"
}
let item6 = {
    imagen : "https://i.blogs.es/9f46a8/buneary/1366_2000.gif",
    categoria : "normal"
}
let item7 = {
    imagen : "https://i.blogs.es/cfbb21/butterfree/1366_2000.png",
    categoria : "bicho"
}
let item8 = {
    imagen : "https://i.blogs.es/3be8b5/celebi/1366_2000.png",
    categoria : "normal"
}
let item9 = {
    imagen : "https://i.blogs.es/2fcf7c/chansey/1366_2000.gif",
    categoria : "normal"
}
let item10 = {
    imagen : "https://i.blogs.es/1acc46/charmander/1366_2000.png",
    categoria : "fuego"
}

let array = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10]

let renderizar = (item) =>{
    return `
        <div>
            <img src="${item.imagen}" alt="">
            <p>${item.categoria}</p>
        </div>`
}

let main = document.getElementById("main");

main.innerHTML = array.map(item => renderizar(item)).join("");

buscador.addEventListener("input", ()=>{
    let valorBusqueda = buscador.value.toLowerCase();
    let resultado = array.filter(item=>item.categoria.toLowerCase().includes(valorBusqueda));
    main.innerHTML = resultado.map(item => renderizar(item)).join("")
})