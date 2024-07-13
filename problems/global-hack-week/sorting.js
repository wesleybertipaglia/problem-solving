/*
    platform: Global Hack Week
    title: Linear Sorting and Bubble Sorting

    description:
    Writes a program that implements two sorting methods: Linear Sort (using JavaScript's built-in sort function) and Bubble Sort.
    
    constraints:
    - The input for both sorting methods must be an array of numbers.
*/

function linearSort(arr) {
    return arr.sort((a, b) => a - b);
}

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
