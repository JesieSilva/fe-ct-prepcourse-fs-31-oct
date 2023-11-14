var arreglo = ["hola", "chao", "como te va"];
console.log(arreglo.length - 1);

console.log("hola".charAt(3));

console.log(arreglo.at(-1))
// Para saber la ultima posicion se coloca .at(-1)

for (var i = 0; i < arreglo.length; i++) {
console.log(arreglo[i]);
}

//? forEach, no modifica el arreglo original
arreglo.forEach(function (elem, indice, array) {
    elem = elem + " a";
console.log(elem, indice, array);
})

//? Map, devuelve un nuevo arreglo con los elementos modificados
var otro = arreglo.map(function (elem, indice, array) {
    elem = elem + " a";
console.log(elem, indice, array);
return elem
})
console.log(otro)

//? Filter
// Devuelve un nuevo arreglo con los elementos que cumplen cierta condicion
var numeros = [3, 4, 7, 6, 40, 2, 3, 4, 3]
var filtrados = numeros.filter(function(elem){
    if (elem == 3) return elem
})
console.log(filtrados)

// Reduce
// Devuelve un numero luego de haber operado todos los elementos del array
var total = numeros.reduce(function(acum, elem){
    acum = acum + elem
    return acum
});
console.log(total)

// Metodos de arreglo
var arr = [1, 2, 3];
console.log(arr)
//push, agrega un elemento al final del array y devuelve la longitud del nuevo array
var prueba = arr.push(7);
console.log(prueba);
console.log(arr)
// pop, elimina un elemento al final del array y devuelve el elemento que borro
var prueba2 = arr.pop();
console.log(prueba2)
console.log(arr)
// unshift, agrega un elemento al principio del array 
var prueba3 = arr.unshift(9);
console.log(prueba3);
console.log(arr);
// shift, quita un elemento al principio del array 
var prueba4 = arr.shift();
console.log(prueba4);
console.log(arr);

// Objeto arguments, es propio de las funciones
