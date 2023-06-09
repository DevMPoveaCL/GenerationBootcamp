//Matrices

/*
    CRUD de matrices
    C-> create
    R-> read
    U-> update
    D-> delete
    Creación de matriz
    var matriz = [1,2,4,5]; -> con datos
    matriz=[]; -> vaciaste la matriz (eliminar)
    const matriz2 = [];-> vacía
    Cómo poder acceder a elemento de la matriz
    el indice de la matriz siempre parte en 0
    var elemento = matriz[1]; -> elemento = 2
    var elemento = matriz[2]; -> elemento = 4
    Cómo editar una matriz
    matriz[2]=3; -> [1,2,3,5];
    matriz[1]='a' -> [1,'a',3,5];
    Cómo puedo imprimir lo elementos de una matriz
    *la vamos a ejemplificar mas abajo
    se ocupan los ciclos for o forEach
*/

//funciones

var matriz = [1,5,2,3,6,7];
var matriz2 = [1,5,2,3,2,7];

/*indexOf -> yo le entrego un elemento y me devuelve la posicion en la que está, si no está el elemento
            retorna -1, si hay mas de un elemento me entrega la posicion del primero que encuentra 
                de izquierda a derecha*/
console.log(matriz.indexOf(10));
console.log(matriz.indexOf(2));
console.log(matriz2.indexOf(2));
//pop -> elimina el ÚLTIMO elemento de la matriz
console.log(matriz.pop()); //-> [1,5,2,3,6]
//push -> agrega un elemento al final de la matriz
matriz.push(8) //-> [1,5,2,3,6,8]
console.log(matriz.push(8))
//splice -> sirve para insertar, editar y eliminar objetos de una matriz en un indice determinado
const matriz3 = [1,5,2,3,6,8,8]
/*
matriz3.splice(1,0,5); //->[1,5,5,2,3,6,8,8]
matriz3.splice(1,1,6); //->[1,6,2,3,6,8,8]
matriz3.splice(1,2,6); //->[1,6,3,6,8,8]
matriz3.splice(1,2); //->[1,3,6,8,8]
matriz3.splice(2)//->[1,5]
*/
matriz3.splice(1,0,5);//[1,5,5,2,3,6,8,8]
matriz3.splice(1,1,6);//[1,6,5,2,3,6,8,8]
matriz3.splice(1,2,6);//[1,6,2,3,6,8,8]
matriz3.splice(1,2);//[1,3,6,8,8]
matriz3.splice(2);//[1,3]
console.log(matriz3);

//UnShift -> Agrega elemento al inicio de la matriz
const matriz4 = [1,5,2,3,6,8,8]
matriz4.unshift('palabra',8);
console.log(matriz4)

//Shift -> Elimina el PRIMER objeto en la matriz

const matriz5 = [1,5,2,3,6,8,8]
matriz5.shift();
//console.log(matriz5)

//Slice -> devuelve una parte de la matriz en formato matriz

const matriz6 = [1,5,8,4,6,9,8]
const sliceMatriz1 = matriz6.slice(2,5); //-> Entrega una matriz con la parte desde le indice 2 hasta el 5
const sliceMatriz2 = matriz6.slice(2);//-> Entrega una parte desde el indice 2 hasta el final de la matriz
const sliceMatriz3 = matriz6.slice(-3);//-> Entrega los 3 últimos dígitos de la matriz
const sliceMatriz4 = matriz6.slice(2,-2);//-> Entrega una parte de la matriz desde el indice 2 hasta 2 posiciones menos que el final
//console.log(matriz6);
console.log(sliceMatriz4);
//--------------------------

//tipos de declaración variables
/* 
    var -> se ocupa cuando uno declara una variable GLOBAL
    let -> se ocupa cuando uno declara una variable LOCAL
    const -> se ocupa cuando uno declara una variable que NO debe cambiar
*/

var x = 1;
var y = 2;
function f (){
    let z = 0;
    x = 2;
}
f();
console.log(x);

function g (){
    const b = 5;
    let a = 5;
    console.log(a);
    console.log(b);
    return b;
}
var respuesta = g();
console.log(respuesta);