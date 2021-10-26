const GameRoom = require('./gameRoom/gameRoom');
const Person = require('./person/person');
const Kid = require('./person/kid');
const Parent = require('./person/parent');
const Toy = require('./toy/toy');
const Doll = require('./toy/doll');
const Cube = require('./toy/cube');
const Car = require('./toy/car');
const Ball = require('./toy/ball');

let room = new GameRoom('Minsk', 50, 10);

console.log(room.budget);
console.log(room.location);
// room.addBudget(60);
// console.log(room.budget);
// room.budget = 8;
// console.log(room.budget);
const dateOfBirth = new Date('September 08, 1996');
// const dateOfBirthMother = new Date('May 05, 1975');
let kid = new Kid('Darya', 'Lapitskaya', dateOfBirth);
let kid2 = new Kid('Darya22', 'Lapitskaya22', dateOfBirth);
console.log(kid.fullName);
let toy1 = new Toy(4, 'large', '18+', 'wood', 'red', 'Ford');
let toy2 = new Toy(10, 'small', '18+', 'metal', 'blue', 'BMW');
room.addKid(kid);
room.addKid(kid2);
room.addToys(toy1);
room.addToys(toy2);

//console.log(room.toysPool);
console.log(room.budget);
// let parent = new Parent('Nadya', 'Duckstein', dateOfBirth);
// parent.addChild(kid);
// console.log(parent.child);

// console.log(kid.surname);
// console.log(kid.dateOfBirth);
// console.log(kid.category);
// kid.category = 'Adult';
// console.log(kid.category);







