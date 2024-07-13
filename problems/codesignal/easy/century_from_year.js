/*
    platform: CodeSignal
    title: Century From Year
    url: https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

    description:
    Given a year, return the century it is in. 
    The first century spans from the year 1 up to and including the year 100, 
    the second - from the year 101 up to and including the year 200, etc.
    
    example:
    For year = 1905, the output should be
    solution(year) = 20;
    
    For year = 1700, the output should be
    solution(year) = 17.

    constraints:
    - [execution time limit] 4 seconds (js)
    - [memory limit] 1 GB
    - [input] integer year, a positive integer, designating the year
    - [output] integer, the number of the century the year is in
*/

function solution(year) {
    return Math.ceil(year / 100);
}
