const Log = require("../helpers/Log");

class CalibrationResult {
    constructor(line, numbers, calibration) {
        this.line = line;
        this.numbers = numbers;
        this.calibration = calibration;
    }
}

function partOne(input) {
    try {
        let totalOfCalibrationValues = 0;
        let logContent = [];

        input.forEach(line => {
            let numbers = line.replace(/[^\d.]/g, '').split("");
            let calibrationValue = parseInt(numbers[0] + numbers.pop());
            totalOfCalibrationValues += calibrationValue;

            let result = new CalibrationResult(line, numbers, calibrationValue);
            logContent.push(result);
        });

        const LogPartOne = new Log("./logs/log-part-1.json"); // log file
        LogPartOne.Create(JSON.stringify(logContent)); // log file output

        console.log("Total of calibration values: ", totalOfCalibrationValues);
        return totalOfCalibrationValues;
    } catch (error) {
        console.log(error);
    }
}

function partTwo(input) {
    try {
        let totalOfCalibrationValues = 0;
        let logContent = [];

        input.forEach(line => {
            const matches = line.match(/\d+|[a-zA-Z]+/g); // finds int numbers and string numbers
            let numbers = []

            matches.forEach(match => {
                if (isNaN(match)) numbers = numbers.concat(getTextNums(match));
                else numbers = numbers.concat(getIntNums(match));
            });

            let calibrationValue = parseInt(numbers[0] + numbers.pop());
            totalOfCalibrationValues += calibrationValue;

            let result = new CalibrationResult(line, numbers, calibrationValue);
            logContent.push(result);
        });

        const LogPartTwo = new Log("./logs/log-part-2.json"); // log file
        LogPartTwo.Append(JSON.stringify(logContent)); // log file output

        console.log("Total of calibration values: ", totalOfCalibrationValues);
        return totalOfCalibrationValues;
    } catch (error) {
        console.log(error);
    }
}

function getTextNums(num) {
    const textNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const matches = [];

    for (let i = 0; i < textNumbers.length; i++) {
        const text = textNumbers[i];

        if (text.includes(num) || num.includes(text)) {
            matches.push(i + 1);
        }
    }

    return matches;
}

function getIntNums(num) {
    if (num.length > 1) {
        const numArray = num.split('');
        const matches = [];

        numArray.forEach(num => {
            matches.push(parseInt(num));
        });

        return matches;
    }
    else {
        return parseInt(num);
    }
}

module.exports = {
    partOne,
    partTwo
}