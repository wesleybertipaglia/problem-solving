const { partOne } = require("../main");

const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
const lines = input.split("\n");

test("test: day 1, example part 1 - to equal 142", () => {
    expect(partOne(lines)).toBe(142);
});