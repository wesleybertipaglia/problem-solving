const { partTwo } = require("../main");

const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
const lines = input.split("\n");

test("test: day 1, example part 2 - to equal 281", () => {
    expect(partTwo(lines)).toBe(281);
});