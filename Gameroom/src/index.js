const GameRoom = require('./gameRoom/gameRoom');
const Person = require('./person/person');
const Kid = require('./person/kid');
const Parent = require('./person/parent');

let room = new GameRoom('Minsk', 50);

console.log(room.budget);
console.log(room.location);
room.addBudget(60);
console.log(room.budget);
room.budget = 8;
console.log(room.budget);
const dateOfBirth = new Date('September 08, 1996');
// const dateOfBirthMother = new Date('May 05, 1975');
let kid = new Kid('Darya', 'Lapitskaya', dateOfBirth);
console.log(kid.fullName);
// let parent = new Parent('Nadya', 'Duckstein', dateOfBirth);
// parent.addChild(kid);
// console.log(parent.child);

// console.log(kid.surname);
// console.log(kid.dateOfBirth);
// console.log(kid.category);
// kid.category = 'Adult';
// console.log(kid.category);







