"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const uuid_1 = require("uuid");
class BaseRepository {
    constructor() {
        this.items = [];
    }
    create(item) {
        item.id = (0, uuid_1.v4)();
        this.items.push(item);
        return item;
    }
    read() {
        return this.items;
    }
    update(item) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
            return item;
        }
        throw new Error(`Item with id ${item.id} not found`);
    }
    delete(id) {
        const index = this.items.findIndex((i) => i.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        else {
            throw new Error(`Item with id ${id} not found`);
        }
    }
}
exports.BaseRepository = BaseRepository;
