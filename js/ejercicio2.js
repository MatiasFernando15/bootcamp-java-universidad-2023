var ingresoTotal = parseFloat(prompt("Ingrese el ingreso total:"));

var gastosNecesarios = ingresoTotal * 0.5;
var gastosOpcionales = ingresoTotal * 0.3;
var ahorroInversion = ingresoTotal * 0.2;

console.log("Monto para gastos necesarios: " + gastosNecesarios);
console.log("Monto para gastos opcionales: " + gastosOpcionales);
console.log("Monto para ahorro e inversión: " + ahorroInversion);