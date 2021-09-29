// Uso de strings
/** STRING TEMPLATE */
// Facilita la concatenacion de strings; // Este es el string que queremos como resultado: El pokemon 004 es 'Charmander'

let pokemon = {
    posicion: 4,
    nombre:"charmander",
    evolucion:"charmaleon",
    ataque:"ember"
}

// Vanilla
let cadena = "El pokemon 00" + pokemon.posicion + " es '" + pokemon.nombre + "'";
// ES6 String Template ( ${variable} )
let cadena2 = `El pokemon 00${pokemon.posicion} es '${pokemon.nombre}'`;

console.log("Vanilla: ", cadena);
console.log("String Template: ", cadena2);


let string = "Hola Mundo";

//charAt

console.log("El char en la posición 0 es: " + string.charAt()); //regresa el primer caracter que es el 0
console.log("El char en la posición 3 es: " + string.charAt(4)); // Cuenta el 0 e imprime el espacio


//indexOf nos va a regresar la posicion de un elemento que le demos

console.log("IndexOf la letra de Hola Mundo que sea la M: " + string.indexOf("M"));
console.log("IndexOf la letra de Hola Mundo que sea la o: " + string.indexOf("o")); //Si hay letras repetidas solo toma la primera que encuentra

//lastIndexOf nos va a mostrar la ultima coincidencia que encuentra
console.log("lastIndexOf la letra de Hola Mundo que sea la o: " + string.lastIndexOf("o"));

// JOIN - SPLIT
// Split divide la cadena con base a un caracter definido por nosotros

let frutas = "platano,manzana,pera,fresa,melon";
console.log("Sin dividir: ", frutas);
console.log("Despues del split: ", frutas.split(","));

let arrayFrutas = frutas.split(","); //Si le pongo un caracter que no encuentra, deja toda la cadena del string en el elemento 0 del array

console.log(arrayFrutas);

// Join va a unir los elementos de un array en una cadena por un caracter definido

console.log("Arreglo despues del join: ", arrayFrutas.join(" * "));

// Replace

let texto = "Estudiar tecnologia es la mejor inversion que he hecho en mi mejor vida";
const palabra = "mejor";

console.log(texto);
console.log(texto.replace(palabra,"peor")); //solo reemplaza la primera palabra que encuentra

// replaceAll no funciona en node pero se hace este truco
console.log(texto.split(palabra));
console.log(texto.split(palabra).join("peor")); // primero lo vuelve arreglo y le quita la palabra mejor. Luego los une con la palabra peor, asi hace el replace all


// includes regresa falso o verdadero

console.log(`La palabra "${palabra}" ${ texto.includes(palabra) ? 'ESTÁ' : 'NO ESTÁ'} en la oración`); // hay un ternario de con el includes

texto = "Hola a todos";

console.log(`La palabra "${palabra}" ${ texto.includes(palabra) ? 'ESTÁ' : 'NO ESTÁ'} en la oración`); // aqui tiene que salir falso
