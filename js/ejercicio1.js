var costoFijo = parseFloat(prompt("Ingrese el costo fijo:"));
var precioVenta = parseFloat(prompt("Ingrese el precio de venta por unidad:"));
var costosVariables = parseFloat(prompt("Ingrese los costos variables por unidad"));

var puntoEquilibrio = costoFijo / (precioVenta - costosVariables);

console.log("El punto de equilibrio en unidades es: " + puntoEquilibrio);