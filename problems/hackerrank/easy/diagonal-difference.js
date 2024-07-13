/*
    platform: HackerRank
    title: diagonal-difference    
    url: https://www.hackerrank.com/challenges/diagonal-difference/
    description: Complete the diagonalDifference function in the editor below.
*/

'use strict';
const fs = require('fs');

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

function diagonalDifference(arr) {
    let countLr = 0
    let countRl = 0
    let diagDif = 0

    for (let i = 0; i < arr.length; i++) {
        countLr += arr[i][i]
        countRl += arr[i][arr.length - 1 - i]
    }

    diagDif = Math.abs(countLr - countRl)
    return diagDif
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);
    ws.write(result + '\n');
    ws.end();
}
