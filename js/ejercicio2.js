var usuarioIngresado = prompt("Ingrese su usuario:");
var claveIngresada = prompt("Ingrese su clave:");

if (usuarioIngresado === "admin" && claveIngresada === "1234") {
    console.log("¡Bienvenido, admin!");
} else {
    console.log("Credenciales inválidas. Acceso denegado.");
}