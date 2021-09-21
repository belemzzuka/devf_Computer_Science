/* 1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe hacer “pop” de tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’] */
/*
class Frutas{
    constructor(){
        this.Frutas = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandia','Melon'];
    }

    //Elimina el ultimo elemento que se agregó
    pop(){
        return this.Frutas.pop();
    }
}

var numero = prompt("Dame un numero");

const frutas1 = new Frutas();

function borrarElementos(arreglo,numero){
    for (let i=0; i<numero; i++){
        frutas1.pop();
    }
}

borrarElementos(frutas1,numero);
console.log(frutas1);
*/


/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, 
de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los siguientes elementos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */


class Numbers{
    constructor(){
        this.Numbers = [3,2,3,4,6,8,1,2,5,5,7,9];
    }

    //Elimina el ultimo elemento que se agregó
    pop(){
        return this.Numbers.pop();
    }
}

//var nuevo = parseInt(prompt("Dame un numero nuevo:"));
//var viejo = parseInt(prompt("Dame un numero viejo:"));


const numero1 = new Numbers();

function reemplazar(arreglo,nuevo,viejo){
    for (let i=(arreglo.Numbers.length-1); i>0; i--){
        if(arreglo.Numbers[i]!=viejo){
            arreglo.Numbers[i]=nuevo;
            // eliminar el resto a partir de aqui
        }
    }
}

reemplazar(numero1,7,2);
console.log(numero1);