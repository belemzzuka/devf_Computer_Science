// JS Vanilla

function suma(num1,num2){
    return num1 + num2;
}

console.log(suma(10,50));

//ES6

const sumar = (num1,num2)=>{
    return num1+num2
};
console.log(sumar(10,50));

const ejSuma = (a,b)=> a+b; // Arrow function que Solo ejecuta una instruccion

const saludar = nombre => "Hola " + nombre; // Arrow function con un solo parametro: cuando solo recibe un parametro se pueden evitar los parentesis

console.log(ejSuma(10,50));

console.log(saludar("Carlos")); //ejecutar la arrow function saludar


//ARREGLOS
const alumnos = ['Adrian', 'Gerardo', 'Jhon', 'Merly'];

alumnos.forEach(item => console.log(item));

// function imprimir(){ console.log }
// sintaxis ( ) => { }

/*
1. Los parentesis son para los parametros. si solo es un parametro, puedes omitir los parentesis. Si no tiene parametros, se quedan vacios ()
2. La flecha es obligatoria ( => )
3. 