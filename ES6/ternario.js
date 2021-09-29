// Operador Ternario
// es un if/else de una sola linea
// Sintaxis (condicion) ? condicionVerdadero : condicionFalso

// Vanilla

console.log("Con Vanilla");
let edad = 23;
if ( edad >= 18 )
{
    console.log("Es mayor de edad");
} else{
    console.log("Es menor de edad");
}

// Ternario
console.log("Con ternario");

(edad >= 18 && edad >= 21) ? console.log("Es mayor de edad") : console.log("Es menor de edad");
//Nota: solo puede ejecutar una instruccion en cada resultado

edad=17;
const esMayorEdad = ( edad >= 18 ) ? "Es mayor de edad" : "Es menor de edad"; //Le va a asignar los strings a la variable esMayorEdad
const esMayorEdad2 = ( edad >= 18 ) ? true : false; //Le va a asignar los valores a la variable esMayorEdad
console.log(esMayorEdad);
console.log(esMayorEdad2);