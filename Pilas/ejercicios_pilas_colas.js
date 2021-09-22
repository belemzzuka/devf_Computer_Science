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

/*
class Numbers{
    constructor(){
        this.Numbers = [3,2,3,4,6,8,1,2,5,5,7,9];
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
*/

//3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
//pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
//camino. Muestre el camino recorrido tanto de ida como de vuelta. 
//Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
//Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
/*
class Pila{
    constructor(){
        this.pila = [];
    }
    //Agregar un elemento al final de la pila
    push(item){
        this.pila.push(item);
        return this.pila;
    }

    //Elimina el ultimo elemento que se agregó
    pop(){
        return this.pila.pop();
    }

    peek(){
    //Aquí es el metodo peek, sin embargo no existe como push y pop que son metodos en JS
        return this.pila[this.pila.length - 1];
    }

    size(){
        return this.pila.length;
    }

    print(){
        console.log(this.pila);
    }
}

function MostrarCamino(recorrido){
    let mostrarCamino = "";
    let auxSize = recorrido.size();

    const auxPila = new Pila(); //para solucionar el imprimirlo de reversa con una Pila auxiliar
    const auxArray = []; //para solucionar el imprimirlo de reversa con un Array auxiliar

    for (let i=0; i< auxSize; i++){ //se repite el numero de veces del length de la pila, para vaciarlo
        mostrarCamino += recorrido.peek(); //muestra el ultimo elemento de la pila y lo va agregando al string mostrarCamino

        auxPila.push(recorrido.peek()); //va agregando a la Pila auxiliar lo del recorrido peek que ya viene de reversa
        auxArray.push(recorrido.peek()); // va agregando al Array auxiliar lo del recorrido peek que ya viene de reversa

        if(i!= auxSize-1){ //Si el indice es diferente de la longitud de la pila -1, para que al final no imprima tambien la flechita
            mostrarCamino += "->"; //que agregue una flechita al string entre los lugares recorridos
        }
        recorrido.pop(); // despues del if, borra el valor de la pila para poder imprimir el siguiente.
    }

    // Opcion 1 Adrian 
    auxArray.reverse(); //voltea el Array auxiliar
    const caminoIdaAdrian = auxArray.join('->'); //agrega la flechita entre lugares
    console.log("Adrian/Recorrido: " + caminoIdaAdrian); 

    // Opcion 2 Jhon
    const array = mostrarCamino.split('->'); //agrega la flechita entre lugares
    array.reverse(); //voltea el arreglo
    const caminoJhon = array.join('->'); //agregar la flechita entre lugares
    console.log("Jhon/Recorrido: " + caminoJhon);

    // Opcion 3 Carlos 
    let stringRecorrido = ""; //declarar vacio el string para irlo llenando
    auxSize = auxPila.size(); //reasignar el valor del length a auxSize pero ahora de la pila auxiliar
    for (let i=0; i<auxSize; i++){ //ciclo fijo el numero de veces de la longitud de la pila
        stringRecorrido += auxPila.peek(); //agregar el principio de la pila auxiliar
        if (i!=auxSize-1){ //si el indice es diferente a la longitud -1, imprime la flechita. -1 para que no la imprima al final
            stringRecorrido += "->";
        }
        auxPila.pop(); //borra lo que estaba al principio de la pila, lo que mostrab en peek
    }

    console.log("Ida: " + stringRecorrido);
    console.log("Regreso: " + mostrarCamino);
}

const recorrido = new Pila(); //instanciamos la clase Pila

//Agregamos camino
recorrido.push("Pueblo Origen");
recorrido.push("Pueblo 1");
recorrido.push("Pueblo 2");
recorrido.push("Destino");

MostrarCamino(recorrido); //mandamos a llamar la funcion
*/

//5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
//Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
//Cola 1: [ amarillo, rojo, azul, morado]
//Cola 2: [rosa, verde, negro, blanco]
class Colas{
    constructor(){
        this.cola = [];
    }

    enqueue(item){ //agrega un elemento a la cola
        this.cola.push(item);
        return this.cola;
    }

    dequeue(){ // extrae el primer elemento de la cola
        return this.cola.shift();
    }

    peek(){ //obtiene el primer elemento sin extraerlo
        return this.cola[0];
    }

    front(){ //nos retorna el primer elemento de la cola sin extraerlo. Front y peek es lo mismo, estamos respetando la estructura de datos
        return this.cola[0];
    }

    back(){ //nos retorna el ultimo elemento agregado a la cola
        return this.cola[this.cola.length - 1];
    }

    size(){ //retorna el tamaño d ela cola
        return this.cola.length;
    }

    print(){ //muestra el contenido de la cola
        console.log(this.cola);
    }

    isEmpty(){
        if (this.cola.length > 0)
            return false;
        else   
            return true;
    }
}

function dividirCola(colores){
    const colaPares = new Colas();
    const colaNones = new Colas();

    const auxSize = colores.size(); 
    //se usa esta variable auxiliar porque si dejaramos el ciclo en colores.size(), 
    //cuando vaya haciendo dequeue va a llegar un punto en que no se cumpla la condición, justo lo hará hasta la mitad.

    for (let i=0; i<auxSize; i++){
        if((i%2)==0){ // es par
            colaPares.enqueue(colores.front());
        } else { //es non
            colaNones.enqueue(colores.front());
        }
        colores.dequeue(); //Despues de que entra a la condicion del if, borra el elemento para ir al siguiente y no solo imprimir el front, que seria el mismo siempre sino eliminamos
    }

    colaPares.print();
    colaNones.print();
}


const cola = new Colas(); //instancia la Cola

cola.enqueue('Amarillo'); //0
cola.enqueue('Rosa'); //1
cola.enqueue('Rojo'); //2
cola.enqueue('Verde'); //3
cola.enqueue('Azul'); //4
cola.enqueue('Negro'); //5
cola.enqueue('Morado'); //6
cola.enqueue('Blanco'); //7

dividirCola(cola); //manda a llamar la funcion con el parametro cola al que le dio los valores con enqueue