const GameRoom = require('./gameRoom/gameRoom');
const Person = require('./person/person');
const Kid = require('./person/kid');
const Parent = require('./person/parent');
const Toy = require('./toy/toy');
const Doll = require('./toy/doll/doll');
const Cube = require('./toy/cube');
const Car = require('./toy/car');
const Ball = require('./toy/ball');
const GameRoomBuilder = require('./gameRoom/gameRoomBuilder');
const TheatreDoll = require('./toy/doll/theatreDoll');
const KewpieDoll = require('./toy/doll/kewpieDoll');
const BuppyDoll = require ('./toy/doll/buppyDoll');

let kids = [
    new Kid('Darya', 'Lapitskaya', new Date('September 08, 1996')),
    new Kid('Maria', 'Zayats', new Date('March 05, 1994')),
    new Kid('Roman', 'Lapitski', new Date('March 10, 1993')),
];

let kids2 = [
    new Kid('aaa', 'aaa', new Date('September 08, 1996')),
    new Kid('bbb', 'bbb', new Date('March 05, 1994')),
    new Kid('ccc', 'ccv', new Date('March 10, 1993')),
];


let toys = [
    new Toy(4, 'large', '18+', 'wood', 'red', 'Ford'),
    new Toy(10, 'small', '18+', 'metal', 'blue', 'BMW'),
    new Toy(15, 'big', '10', 'wood', 'orange', 'Nike'),
];

//let room = new GameRoom('Minsk', 50, 10);
let room = new GameRoomBuilder().addKidsPool(kids).addToysPool(toys).build();
console.log(room.kidsPool);
room.addKidsPool(kids2);
// console.log(room.budget);
// console.log(room.location);
// room.addBudget(60);
// room.location = 'Minsk';
// console.log(room.budget);
// console.log(room.location);
console.log(room.kidsPool);
// console.log(room.budget);
// room.budget = 8;
// console.log(room.budget);
//const dateOfBirth = new Date('September 08, 1996');
// const dateOfBirthMother = new Date('May 05, 1975');
// let kid = new Kid('Darya', 'Lapitskaya', new Date('September 08, 1996'));
// let kid2 = new Kid('Darya22', 'Lapitskaya22', dateOfBirth);
// console.log(kid.fullName);
// let toy1 = new Toy(4, 'large', '18+', 'wood', 'red', 'Ford');
// // let toy2 = new Toy(10, 'small', '18+', 'metal', 'blue', 'BMW');
// room.addKid(kid);
// room.addKid(kid2);
// room.addToys(toy1);
// room.addToys(toy2);
//console.log(room.toysPool);
// console.log(room.budget);
// let parent = new Parent('Nadya', 'Duckstein', dateOfBirth);
// parent.addChild(kid);
// console.log(parent.child);
// console.log(kid.surname);
// console.log(kid.dateOfBirth);
// console.log(kid.category);
// kid.category = 'Adult';
// console.log(kid.category);







