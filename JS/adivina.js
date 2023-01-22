// Función para generar un número aleatorio
function generarNumeroRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

// Inicializo la variable para almacenar el número aleatorio
let numeroRandom = generarNumeroRandom();

// Bucle para pedir al usuario que adivine el número
while (true) {
    // Le pido al usuario que ingrese un número
    let numeroUsuario = prompt("Adivina el número entre 1 y 100:");

    // Condicional para comprobar si el número del usuario es correcto
    if (numeroUsuario == numeroRandom) {
        alert("¡Felicidades! ¡Adivinaste el número!");
        break;
    } else if (numeroUsuario > numeroRandom) {
        alert("El número es más pequeño, inténtalo de nuevo.");
    } else {
        alert("El número es más grande, inténtalo de nuevo.");
    }
}