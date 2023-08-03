function sayHello() {
    console.log('Hello, world!');
}
sayHello();

function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Magical Trevor');

function multiplyMe(a, b) {
    return a * b;
}
console.log(multiplyMe(2, 8));

// Challenge
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(randomChoice(colours));
console.log(randomChoice(colours));
