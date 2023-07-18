/*variables*/
var miNombre = "Matias";
var miApellido = "Di Giovanni";
var miSegundoNombre = "Fernando";

/*constantes*/
const altura = 188;
const colorDeOjos = "marones";
const fechaNacimiento = "17/09/1988";

/*variables de bloque: pueden cambiar su valor*/
let colorDePelo = "castaño";
let peso = 120;

/*saber el tipo de variable*/
//guardar el tipo de dato en una variable
let tipoMiApellido = typeof(miApellido);
//breack point
console.log(tipoMiApellido);//console.log es un método/función de consola

tipoMiApellido = typeof(altura);
console.log(tipoMiApellido);

/*Definir una variable tipo object */
const maite = {
    name: "maite",
    edad: 25,
};
const matias = {
    name: "matias",
};

// a un objeto le puedo agregar atributos "on the fly"
matias.altura = 200;

//obtengo las claves del objeto matias
alert('linea 36' + Object.keys(matias)); // de fabrica!