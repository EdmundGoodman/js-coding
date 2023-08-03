var cars = ['toyota', 'suzuki', 'bmw', 'peugeot', 'jaguar'];

console.log(cars[0]);

for (var i = 0; i < 5; i++) {
    console.log(cars[i]);
}

cars.push("ford");
var last = cars.pop();
console.log(last);

var car = { make: 'VW', model: 'Beetle' };
console.log(car.model);
car.model = 'passat';
console.log(car.model);

// Challenge
var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var carNames = ["mazda", "renault", "bugatti", "lotus", "ferrari"];
for (var i = 0; i < carNames.length; i++) {
    var randomColour = colours[Math.floor(Math.random() * colours.length)];
    randomCar = {
        car: carNames[i],
        colour: randomColour
    };
    cars.push(randomCar)
}
console.log(cars);

// Stretch goals
for (car of cars) {
    console.log(car);
}
