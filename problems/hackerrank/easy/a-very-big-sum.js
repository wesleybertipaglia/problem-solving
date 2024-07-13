/*
    platform: Hacker Rank
    title: Linear Sorting and Bubble Sorting
    url: https://www.hackerrank.com/challenges/a-very-big-sum/
    description: Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.    
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

function aVeryBigSum(ar) {
    let arSum = 0;
    ar.forEach((x) => {
        arSum += x
    });
    return arSum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const arCount = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);
    ws.write(result + '\n');
    ws.end();
}
