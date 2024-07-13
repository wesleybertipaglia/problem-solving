/*
    platform: HackerRank Challenges
    title: staircase
    url: https://www.hackerrank.com/challenges/staircase/
    description: Complete the staircase function in the editor below.    
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

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let stairs = "#".repeat(i);
        let spaces = " ".repeat(n - i);
        console.log(spaces + stairs)
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    staircase(n);
}