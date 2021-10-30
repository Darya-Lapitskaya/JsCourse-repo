const GameRoom = require('./gameRoom');

class GameRoomBuilder {
    constructor() {
        this.gameRoom = new GameRoom();
    }

    addToysPool(toys) {
        this.gameRoom.toysPool = [...this.gameRoom.toysPool, ...toys];
        return this;
    }

    addKidsPool(kids) {
        this.gameRoom.kidsPool = [...this.gameRoom.kidsPool, ...kids];
        return this;

    }

    addToy(toy) {
        this.gameRoom.toysPool.push(toy);
        return this;
    }

    addKid(kid) {
        this.gameRoom.kidsPool.push(kid);
        return this;
    }

    build(){
        return this.gameRoom;
    }
}

module.exports = GameRoomBuilder;