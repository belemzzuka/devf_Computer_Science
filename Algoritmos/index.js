function bubbleSort(array){ //va acomodando conforme recorre pares y los va switcheando. Por eso tiene que recorrer el arreglo las veces de su length.
    for (let i = 0; i < array.length; i++) { // le da toda la vuelta al arreglo
        console.log("Vuelta", i);
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){ //Verificamos si mi actual es mayor
                // Intercambiar mis valores
                let valorActual = array[j];
                array[j] = array[j+1];
                array[j+1] = valorActual;
            }
            console.log("Arreglo", array);
        }
        
    }
    return array;
}

function insertionSort(array){ //cuando encuentra uno menor lo acomoda en su lugar
    for (let i = 1; i < array.length; i++) { //correr el arreglo
        let position = i; //
        let valorActual = array[i];
        while(valorActual < array[position-1]){
            array[position] = array[position-1];
            position = position-1;
        }
        array[position] = valorActual;
        console.log("Arreglo de vuelta", array);
    }
    return array;
}

const arreglo1 = [10, 2, 6, 1, 9, 7, 3, 4];
//correr a mano el insertSort. Primera Vuelta
// i=1; position=1; valorActual=2
// 2 < 10 ? Si --> Entra al while ... array[1] = 10; [10, 10, 6, 1, 9, 7, 3, 4]; position = 1-1 = 0; position = 0
// Ahora que position = 0 , no entra al while porque position-1 = NADA
// array[0] = 2; --> [2, 10, 6, 1, 9, 7, 3, 4]
// SEGUNDA VUELTA
// i=2; position=2; valorActual=6
// 6 < 10 ? si --> Entra al while ... array[2] = 6 lo cambia por el position-1 que es 10; [2, 10, 10, 1, 9, 7, 3, 4]; position = 2-1 = 1; position = 1
// Ahora que position = 1 , compara en el while y ... 6 < 2 ? valorActual(6) < array[1-1] osea array[0] que es 2 por eso 6 < 2 ? NO entra al while
// como position = 1; array[1] = valorActual(6); [2, 6, 10, 1, 9, 7, 3, 4]
// TERCERA VUELTA
// i=3; position=3; valorActual=1
// 1 < 10 ? SI --> Entra al while ... array[3] = 1 lo cambia por el position-1 que es 10; [2, 6, 10, 10, 9, 7, 3, 4]; position = 3-1 = 2; position = 2
// Ahora que position = 2 , compara el while y ... 1 < 6 ? valorActual(6) < array[2-1] osea array[1] que es 6 por eso 1 < 6 ? SI y entra al while
// array[2] = array [1] --> [2, 6, 6, 10, 9, 7, 3, 4]; position(2) = 2-1 = 1
// ahora que position = 1 , compara el while y 1 < 2 ?  porque position = 1-1 = 0
// array[1] = array[0] --> [2, 2, 6, 10, 9, 7, 3, 4]; position(1) = 1-1 = 0
// 1 < NADA ? No entra al while y ...
// array[position] = valorActual --> [1, 2, 6, 10, 9, 7, 3, 4]



//console.log(bubbleSort(arreglo1));
console.log(insertionSort(arreglo1));