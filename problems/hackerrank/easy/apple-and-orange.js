/*
    platform: HackerRank
    title: apple-and-orange    
    url: https://www.hackerrank.com/challenges/apple-and-orange/
    description: Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.
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

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesOnHouse = apples.filter((appleDist) => {
        const applePosition = a + appleDist;
        return applePosition >= s && applePosition <= t;
    }).length;

    const orangesOnHouse = oranges.filter((orangeDist) => {
        const orangePosition = b + orangeDist;
        return orangePosition >= s && orangePosition <= t;
    }).length;

    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);
    const t = parseInt(firstMultipleInput[1], 10);
    const a = parseInt(secondMultipleInput[0], 10);
    const b = parseInt(secondMultipleInput[1], 10);
    const m = parseInt(thirdMultipleInput[0], 10);
    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));
    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
