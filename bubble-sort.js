const bubbleSort = (array) => {
    let temp;

    // nested loop
    // outer loop decrements
    for (let i = array.length; i > 0; i--) {
        // inner loop increments
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                // array swapping magic!
                // this strategry can swap elements in an array
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let numbers = [3, 5, 1, 8, 33, 900, 2, 1, 1, 5, 7, 3, 13];

console.log(bubbleSort(numbers));