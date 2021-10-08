const insertionSort = (array) => {
    // start at 1, assume 0 is in the correct position
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        // check index before
        let j = i - 1;
        // is the previous element larger than current?
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
};

const numbers = [1, 8, 4, 7, 36, 2, 99, 98, 13, 9, 3, 2];

console.log(insertionSort(numbers));