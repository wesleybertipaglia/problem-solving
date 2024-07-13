/*
    platform: HackerRank
    title: grading    
    url: https://www.hackerrank.com/challenges/grading/
    description: Complete the function gradingStudents in the editor below.
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

function gradingStudents(grades) {
    return grades.map((grade) => {
        const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
        const difference = nextMultipleOfFive - grade;

        if (grade >= 38 && difference < 3) {
            return nextMultipleOfFive;
        } else {
            return grade;
        }
    });
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];
    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);
    ws.write(result.join('\n') + '\n');
    ws.end();
}
