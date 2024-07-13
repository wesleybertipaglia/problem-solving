/*
    platform: HackerRank
    title: plus-minus
    url: https://www.hackerrank.com/challenges/plus-minus/
    description: Complete the plusMinus function in the editor below.    
*/

'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function calculateRatios(arrLength, resultsLength) {
    const ratio = resultsLength / arrLength;
    console.log(ratio);
}

function plusMinus(arr) {
    const arrLength = arr.length;
    const positives = arr.filter(num => num > 0);
    calculateRatios(arrLength, positives.length);

    const negatives = arr.filter(num => num < 0);
    calculateRatios(arrLength, negatives.length);

    const zeros = arr.filter(num => num == 0);
    calculateRatios(arrLength, zeros.length);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
