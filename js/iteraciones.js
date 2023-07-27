/*
    Mostar las N primeros número 
    N se ingresa por teclado.
*/
//const N = Number(prompt('Ingrese N'));
//N = 10
/*
0
1
2
3
4
5
6
7
8
9
10
*/
//for: 
//while: 
//do-while: 

//sintáxis
/*
for(let i=0; i <= N ; i++) {
    console.log(i);
}
*/
//let cantidadPares = 0;
/*for(let i=N; i >= 0 ; i--) {
    if(i > 0 && i%2 === 0){
        console.log(i);
        cantidadPares++;
    }
}
*/

/*
let i=N;
while(i>=0) {
    if(i > 0 && i%2 === 0){
        console.log(i);
        cantidadPares++;
    }
    //al final
    i--;
}
*/
//do-while
/*let i=N;
do {
    if(i > 0 && i%2 === 0){
        console.log(i);
        cantidadPares++;
    }
    i--;
}while(i >=0);*/
//ejercicio!!!

/*mostrar los N primeros número pares */
/*contar cuanto pares hay*/
//console.log('cantidadPares',cantidadPares);

const nota1 = Number(prompt('Ingrese nota1'));
const nota2 = Number(prompt('Ingrese nota2'));
const nota3 = Number(prompt('Ingrese nota3'));

let promedio = (nota1 + nota2 + nota3) /3;

console.log(promedio);