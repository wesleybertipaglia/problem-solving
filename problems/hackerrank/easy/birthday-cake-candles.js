/*
    platform: HackerRank
    title: birthday-cake-candles
    url: https://www.hackerrank.com/challenges/birthday-cake-candles/
    description: Complete the function birthdayCakeCandles in the editor below.    
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

function birthdayCakeCandles(candles) {
    const tallestHeight = Math.max(...candles);
    const tallestCount = candles.filter((height) => height === tallestHeight).length;
    return tallestCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);
    ws.write(result + '\n');
    ws.end();
}
