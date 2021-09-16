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

const colaAlumnos = new Colas();
console.log(colaAlumnos.isEmpty()); //true

colaAlumnos.enqueue("Sofia");
colaAlumnos.enqueue("Belem");
colaAlumnos.enqueue("Karen");
colaAlumnos.enqueue("Hugo");
colaAlumnos.enqueue("Paco");
colaAlumnos.enqueue("Luis");

console.log(colaAlumnos.isEmpty()); //false
colaAlumnos.print(); //[Sofia, Belem, Karen, Hugo, Paco, Luis]

console.log(colaAlumnos.front()); //Sofia
console.log(colaAlumnos.dequeue()); //Sofia
console.log(colaAlumnos.front()); //Belem
console.log(colaAlumnos.back()); //Luis
console.log(colaAlumnos.size()); //5
