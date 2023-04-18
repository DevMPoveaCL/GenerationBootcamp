//EJERCICIO 1

/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.*/


var compra = [1000,500,2000,12000];
var dia = 'Domingo'.toLowerCase();    // transformo todo a minúscula para evitar posibles errores al ingresar días con mayúsculas
var totalCompra = 0;
function descuentoDias (dia,compra){
    for ( i=0;i<compra.length;i++){      // Recorro la lista
        if (dia == 'martes'|| dia=='jueves'){ // si dia es igual a lunes o jueves
            totalCompra = (totalCompra+compra[i])*0.80; // sumo todos los precios de la lista y los multiplico *0.8 para calcular 20% descuento
        }else if (dia == 'lunes' || dia=='miercoles'||dia=='viernes'||dia=='sabado'||dia=='domingo'){  // Si es lunes,miercoles,viernes,sabado o domimgo.
            totalCompra+=compra[i];         //sumo todos los precios de la lista y lo guardo en var totalCompra
        }else{                            // si se ingresa otra palabra que no sea los días de la semana
            totalCompra = 'El día ingresado no es válido';   // mi var totalCompra guarda un mensaje de error.
        }   
    }return totalCompra                 // Retorno suma de producto, con precio,sin precio o mensaje de error dependiendo de valor ingresado
}
var compraFinal = descuentoDias(dia,compra); // guardo el resultado de la funcion en una variable

console.log(compraFinal);   // imprimo mi funcion
console.log(dia);


//EJERCICIO 2

/*Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.*/


var compra2 = [1000,200,650,1000]
var compraMayor = compra2[0];
var totalCompra2 = 0;
function descuentoCompra (compra2){   
    for (i=0;i<compra2.length;i++){              //Recorro mi lista
        if (compra2[i]>compraMayor){   // necesito saber el prodcuto de mayor precio, ocupo if para buscar mi mayor precio
            compraMayor = compra2[i];     // cuando encuentre el mayor precio, lo guardo en mi variable compraMayor
        }
        if (compra2.length>3 && compraMayor>10000){   // si la lista supera 3 productos Y la compraMayor supera los 10000
            totalCompra2 = (totalCompra2+compra2[i])*0.95;  // Devuelvo la sumo todos los precios y los multiplico *0.95 para aplicar el 5% descuento
        }else{                          //si no se cumple ninguna de las 2 condicion es que puse anteriormente
            totalCompra2+=compra2[i];  //devuelvo la suma de todos los productos
        }
    }return totalCompra2     // retorno el total de la compra, con total sin descuento o con descuento, dependiendo en cual if entro
     
                    
}
var compraFinal2 = descuentoCompra(compra2);  // creo una variable para guardar el resultado de la funcion
console.log(compraFinal2);         // imprimo mi variable

//EJERCICIO 3
/*
Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba. */


var compra3 = [1000,200,-100,300]
var compraMenor = compra3[0];
var mensaje;
function valoresNeg (compra3){
    for (i =0;i<compra3.length;i++){    // Recorro mi lista
        if(compra3[i]<compraMenor){    // Necesito saber el numero menor de mi lista, comparo todos los elementos de la lista, cuando encuentra el mas bajo
            compraMenor = compra3[i];  // se guarda en la variable compraMenor
        }
        if (compraMenor<0){                 // Si hay un numero menor a 0 (negativo)
            mensaje = 'Error!, precio negativo '+compraMenor+' en el indice: '+compra3.indexOf(compraMenor); // guardo un mensaje, con el numero y en la posicion de la list que está 
        }else{                               // Si no hay un numero negativo
            mensaje = 'Proceso Exitoso!'      // guardo en mensaje el texto de exito..
        }
    }return mensaje    // retorno el mensaje, dependiendo de si hay o no negativo en la lista
}

var verificar = valoresNeg(compra3)  // creo una variable para guardar el resultado de la funcion
console.log(verificar)            // imprimo mi variable

//EJERCICIO 4

//Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada producto
//Crea una función que retorne el valor del producto menos costoso.

var arreglo = [200,5500,900,7000,500,300];
var menorValor = arreglo[0];
function menosCostoso (arreglo){
    for(i=0;i<arreglo.length;i++){         // recorro la lista
        if (arreglo[i]<menorValor){        // comparo mis elementos y cuando encuentro el menor
            menorValor = arreglo[i]        // lo guardo el numero menor en mi variable menorValor
            
        } 
    
    } return 'El valor menos cosotos es: '+menorValor;  // Retorno un mensaje mas el numero menor de la lista

}
var masBajo = menosCostoso(arreglo);  // creo una variable para guardar el resultado de la funcion
console.log(masBajo)               // imprimo mi variable

//EJERCICIO 5

// Crea una función que retorne el valor del producto más costoso.

var mayorValor = arreglo[0]
function masCostoso (arreglo){
    for ( i=0;i<arreglo.length;i++){     // Recorro la lista
        if (arreglo[i]>mayorValor){      // comapro mis elementos y cuando encuentro el mayor
            mayorValor=arreglo[i]         // guardo el numero mayor en mi variable mayorValor
            
        }
    } return 'El valor mas cosotoso es: '+mayorValor;  // Retorno un mensaje mas el numero mayor de la lista
}

var productoMasCosotoso = masCostoso(arreglo)   // creo una variable prara guardar el resultado de la funcion
console.log(productoMasCosotoso);         //  imprimo mi variable