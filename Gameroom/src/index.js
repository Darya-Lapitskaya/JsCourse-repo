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
const BuppyDoll = require('./toy/doll/buppyDoll');
const prompt = require('prompt-sync')();
const data = require('E:/JsCourse/JsCourse-repo/Gameroom/data/data.json');

let kids = [
    new Kid('Darya', 'Lapitskaya', new Date('September 08, 1996')),
    new Kid('Maria', 'Zayats', new Date('March 05, 1994')),
    new Kid('Roman', 'BlaBla', new Date('March 10, 1993')),
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
    new Toy(10, 'big', '3', 'wood', 'blue', 'Barbie'),
    new BuppyDoll(10, 'small', '3', 'wood', 'blue', 'Barbie', 'aaa', false)
];

let toys2 = [
    new Toy(1, 'large', '18+', 'wood', 'red', 'new1'),
    new Toy(1, 'small', '18+', 'metal', 'blue', 'new2'),
    new Toy(10, 'big', '10', 'wood', 'orange', 'new3'),
];
let toy1 = new Toy(100, 'big', '10', 'wood', 'orange', 'new3');

(async () => {
    let isStartMenu = true;
    let isMenu = true;
    while (isStartMenu) {
        const budget = await prompt('Welcome to Gameroom! Please enter the start budget for your gameroom ');
        const option = await prompt('Choose the way for creation of Toys pool: \n1-from array declared in index.js \n2 - from JSON file \n 0-exit');
        switch (option) {
            case '1':
                let room = new GameRoomBuilder(budget).addKidsPool(kids).addToysPool(toys).build();
                isStartMenu = false;
                break;
            case '2':
                room = new GameRoomBuilder(budget).addKidsPool(kids).addToysPoolJson().build();
                isStartMenu = false;
                break;
            case '0':
                isStartMenu = false;
                break;
            default:
                console.log('Cannot recognize your answer. Please try again.');
                break;
        }
    }
    while (isMenu) {
        const menu = await prompt('Please select the section: \n1 - Kids \n2- Toys \n3 - Budget \n0 - exit from menu ');
        // const menu = await prompt('Please select option: \n1 - show list of toys \n2- show list of kids \n3 - Add new toy \n4 - Filter toys \n0 - exit from menu ');
        switch (menu) {
            case '1':
                let isKidMenu = true;
                while (isKidMenu) {
                    const kidMenu = await prompt('\nPlease select the option: \n1 - View list of Kids \n2 - Add Kid \n3 - Get info about Kid parent \n4 - Add Parent info for Kid  \n0 - back ');
                    switch (kidMenu) {
                        case '1':
                            console.table(kids);
                            break;
                        case '2':
                            break;

                        case '3':
                            break;
                        case '4':
                            break;

                        case '0':
                            isToyMenu = false;
                            break;
                        default:
                            console.log('Cannot recognize your answer. Please try again.');
                            break;
                    }
                }
            case '2':
                let isToyMenu = true;
                while (isToyMenu) {
                    const toyMenu = await prompt('Please select the option: \n1 - View list of Toys \n2 - Add Toy \n3 - Sort Toys by Price \n4 - Filter Toys  \n0 - back ');
                    switch (toyMenu) {
                        case '1':
                            console.table(toys);
                            break;
                        case '2':
                            room.addToy(toy1);
                            break;

                        case '3':
                            const sortOption = await prompt('Please enter "asc" or "desc" for sort toys by price');
                            room.sortbyPrice(sortOption);
                            break;
                        case '4':
                            let isParamMenu = true;
                            let params = {};
                            while (isParamMenu) {
                                const paramMenu = await prompt(' Select one or many parameters for filtering. 1 - Filter by price 2 - Filter by material 0 - finish&show result');
                                if (paramMenu != "0") {
                                    const value = await prompt(' Please enter the value: ');
                                    params[paramMenu] = value;
                                    console.log(params);
                                } else {
                                    console.log(params);
                                    let filtArr = room.filterToys(params);
                                    console.log(filtArr);
                                    isParamMenu = false;
                                }
                            }
                            break;

                        case '0':
                            isToyMenu = false;
                            break;
                        default:
                            console.log('Cannot recognize your answer. Please try again.');
                            break;
                    }
                }
                break;
            case '3':
                let isBudgetMenu = true;
                while (isBudgetMenu) {
                    const budgetMenu = await prompt('Please select the option: \n1 - View current budget for gameroom \n2 - Donate to the gameroom \n0 - back ');
                    switch (budgetMenu) {
                        case '1':
                            console.table(toys);
                            break;
                        case '2':
                            break;

                        case '3':
                            break;
                        case '4':
                            break;

                        case '0':
                            isToyMenu = false;
                            break;
                        default:
                            console.log('Cannot recognize your answer. Please try again.');
                            break;
                    }
                }
                break;

            case '0':
                isMenu = false;
                break;

            default:
                console.log('Cannot recognize your answer. Please try again.');
                break;
        }
    }

})();
