const selectionSort = (array) => {

    // start at beginning of array
    // stop before the last element
    for (let i = 0; i < array.length - 1; i++) {

        // assume index i is the smallest
        let minIndex = i;

        // start at i - don't need to check value before
        for (let j = i; j < array.length; j++) {
            // if you come to an element smaller than index i, replace the index
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // swaps
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
}

console.log(selectionSort([1, 5, 9, 2, 0, 75, 22, 26, 10]))