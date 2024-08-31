// Obtener el elemento del DOM
let reloj = document.getElementById("reloj");

// Función para obtener la hora en formato de dos dígitos
function formatearNumero(num) {
    return num < 10 ? '0' + num : num;
}

// Función para actualizar la hora
function actualizarHora() {
    let ahora = new Date();
    let horas = formatearNumero(ahora.getHours());
    let minutos = formatearNumero(ahora.getMinutes());
    let segundos = formatearNumero(ahora.getSeconds());

    // Actualizar el contenido del elemento
    reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}

// Llamar a la función para mostrar la hora inicial
actualizarHora();

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);