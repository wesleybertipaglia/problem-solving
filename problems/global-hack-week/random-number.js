/*
    platform: Global Hack Week
    title: Random Number

    description:
    Write a function that returns a random number in a range from min to max.

    constraints:
    - The min and max arguments are numbers
    - The min and max arguments are optionals
*/

function getRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
