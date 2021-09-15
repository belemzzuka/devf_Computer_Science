class Pila {
    constructor(){
        this.pila = {};
        this.contador = 0;
    }

    push(item){
        this.pila[this.contador] = item;
        this.contador++;
        return this.pila;
    }

    pop(){
        //Tenemos que restarlo porque el contador siempre está al final
        this.contador--;
        //Identificarlo en la lista de elementos de la pila
        const item = this.pila[this.contador];
        //Falta eliminarlo de la fila
        delete this.pila[this.contador];
        return item;
    }

    peek(){
        return this.pila[this.contador - 1];
    }

    size(){
        return this.contador;
    }

    print(){
        return this.pila;
    }
}

const pilaObjetos = new Pila();
pilaObjetos.push("Libro 1");
pilaObjetos.push("Libro 2");
pilaObjetos.push("Libro 3");
console.log(pilaObjetos);
console.log("pop", pilaObjetos.pop());
console.log(pilaObjetos);
console.log("peek", pilaObjetos.peek());
console.log("size", pilaObjetos.size());
console.log("print", pilaObjetos.print()); //se podria imprimir desde el metodo en la clase