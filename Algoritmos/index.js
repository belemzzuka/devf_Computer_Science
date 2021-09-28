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
//correr a mano el insertSort
// i=1; position=1; valorActual=2;
//console.log(bubbleSort(arreglo1));
console.log(insertionSort(arreglo1));