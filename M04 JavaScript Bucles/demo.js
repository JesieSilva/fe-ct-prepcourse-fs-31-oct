//? WHILE
// Mientras que ocurra una condicion, hace lo siguiente
var num = 5;
while (num < 10) {
    console.log("Estoy corriendo 10 m");
    num = num + 1;
}
//? DO WHILE
// Hace lo siguiente, mientras se cumpla esta condicion
var num = 1;
do {
    console.log("hola");
    num = num + 1;
} while (num < 4);
//? FOR
// El for define un indice que va a cumplir un rol de iterador, debemos definir hasta cuando o hasta donde va a iterar y tambien debemos decirle de cuanto en cuanto va a iterar, si es de uno en uno o de dos en dos.
for (var i = 0; i < 10; i++) {
    console.log(i)
}
//? Object es un Array []
// Un array es una coleccion de elementos ordenados
// posiciones / indices
// siempre el indice de un array arranca en 0
// podemos calcular la longitud, cantidad de elementos
// .length
console.log([4,5].length)
console.log([2,4,5].length)
// No podemos confundir las posiciones con la longitud

var arreglo1=[4,5];
console.log(arreglo1.length-1)
console.log(arreglo1[1])
// En este ultimo, accedes a una posicion en especifico, como la posicion 1 que es el 5

//? Fusiones de los bucles con el arreglo
var arreglo2 = [1, 3, 5, 7, 9, 11, 13];
for (var i = 0; i < arreglo2.length; i++) {
    console.log(arreglo2[i]);
}
