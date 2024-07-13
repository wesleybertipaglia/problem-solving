/*
    platform: Global Hack Week
    title: Hello World

    description:
    Write a function that takes a name as an argument and prints "Hello {name}!" to the console. If no name is provided, print "Hello World!" instead

    constraints:
    - The name argument is a string
    - The name argument is optional
*/


function sayHello(name) {
    name = name || 'World';
    console.log('Hello ' + name + '!');
}

sayHello('Wesley'); // Hello Wesley!
sayHello(); // Hello World!