// Destructuring { }

let pokemon = {
    posicion: 4,
    nombre:"charmander",
    evolucion:"charmaleon",
    ataque:"ember"
}

console.log(pokemon.nombre);

// para validarlos
// if(pokemon.nombre){}
// if(pokemon.evolucion){}

// Destructuring

const { nombre, ataque, evolucion } = pokemon;
console.log("{ destructuring the object -> }", nombre, ataque, evolucion);

// Vanilla

let nombree = pokemon.nombre;
let ataquee = pokemon.ataque;


// Destructuring arrays [ ]

let pokemons = ["charmander", "pikachu", "snorlax", "charizard"];

const [pokemon1,pokemon2,pokemon3] = pokemons;
console.log("Imprimir la posicion 1 y 2 del array ", pokemon1,pokemon2,pokemon3);

// equivalente con vanilla

const charmander1 = pokemons[0];

// TIP: Reemplazar los elementos que no necesitamos con _

const [pokemon4,_,__,pokemon5] = pokemons; //no te deja utilizar el guion bajo dos veces, cada vez que lo uses debes incrementarle un guion bajo
console.log("Imprimiendo con el _ ", pokemon4, pokemon5);