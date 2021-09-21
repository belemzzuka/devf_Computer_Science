//Crear clase nodo

class Node{
    constructor(data){
        this.data = data; //Lo que vamos a guardar
        this.next = null; //Nos va a indicar el nodo siguiente
    }
}

//clase de lista
//Métodos: 
// - Agregar un nodo (al inicio y al final)
// - Eliminar un nodo
// - Buscar un nodo
// - Recorrer la lista
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    addNodeStart(data){
        const node = new Node(data); // Creamos el nuevo nodo con la data que le mandemos. Lo creamos desde la clase Node de arriba
        if(this.head ===null){ //La cabeza está vacía? Entonces quiere decir que la lista esta vacía, no hay ningún nodo.
            this.head = node; // Agregará el nodo creado al principio como unico valor
        } else { //Cuando es el primer nodo de una lista que ya tiene elementos
            node.next = this.head; //Este nuevo nodo se conectaria con el actual head
            this.head = node; //La cabeza ahora es este nodo nuevo
        }
    }

    print(){
        let actualNode = this.head; //Declaramos la cabeza para hacer el comparativo con una variable
        while(actualNode !== null){ //Mientras sea diferente a null, osea que tenga contenido y no sea el ultimo nodo
            console.log(actualNode); //Imprime el nodo que vaya recorriendo
            actualNode = actualNode.next; //Reasigna la variable actualNode al siguiente nodo
        }
    }
}

const listaDePersonas = new LinkedList();
listaDePersonas.addNodeStart("Adrian");
listaDePersonas.addNodeStart("Arnold");
listaDePersonas.addNodeStart("Merly");
listaDePersonas.print();
