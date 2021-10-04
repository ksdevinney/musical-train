const binarySearch = (value, arr) => {
    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
        console.log('not here');
        const middle = lower + Math.floor((upper - lower) / 2);

        if (value === arr[middle]) {
            console.log(`Found at ${middle}!`)
            // return middle;
        }

        if (value < arr[middle]) {
            upper = middle - 1;

        } else {
            lower = middle + 1;
        }
    }

    return -1;
}

const values = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

console.log(binarySearch(25, values));