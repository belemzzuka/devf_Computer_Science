//SpreadOperator con arreglos
// operador ...

// fusionando el contenido de los arreglos

const alumnos = ["Merly", "Adrian", "Jorde", "Jhon"];
const senseis = ["Ahiram", "Carlos"];

const g10 = [...alumnos, "Fiorella", "Leo", "Martin", ...senseis, "Brenda"]; //concatenando los arrays con ...

console.log(alumnos);
console.log(senseis);
console.log(g10);

//Spread Operator con objetos

let infoAlumno = {
    nombre: "Jorge",
    apellido: "Mendoza",
    email: "jorge@ejemplo.com"
}

let infoComplementaria = {
    modulos:["Intro a HTML", "Intro a JS", "Computer Science"],
    hobbies: ["Hacer bebidas"],
    direccion: "su casa 123",
    nombre: "Jhon" // Las propiedades que son iguales se sobreescriben
}

let alumno = {
    ...infoAlumno,
    usuario: "jorgeM",
    ...infoComplementaria,
    peliculaFavorita: "Marvel"
}

console.log(alumno);
