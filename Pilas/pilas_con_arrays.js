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

const pila1 = new Pila();
console.log(pila1);
pila1.push("Libro 1");
pila1.push("Libro 2");
pila1.push("Libro 3");
pila1.push("Libro 4");
console.log("push", pila1);
console.log("pop", pila1.pop());
console.log("pop", pila1);
console.log("peek", pila1.peek());
console.log("size", pila1.size());
pila1.print();
