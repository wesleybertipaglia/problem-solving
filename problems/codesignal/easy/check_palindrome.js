/*
    platform: CodeSignal
    title: Check Palindrome
    url: https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

    description:
    Given the string, check if it is a palindrome.
    
    example:
    For inputString = "aabaa", the output should be
    solution(inputString) = true;
    
    For inputString = "abac", the output should be
    solution(inputString) = false;
    
    For inputString = "a", the output should be
    solution(inputString) = true.

    constraints:
    - [execution time limit] 4 seconds (js)
    - [memory limit] 1 GB
    - [input] string inputString, a non-empty string consisting of lowercase characters
    - [output] boolean, true if inputString is a palindrome, false otherwise
*/

function solution(inputString) {
    return inputString === inputString.split('').reverse().join('');
}
