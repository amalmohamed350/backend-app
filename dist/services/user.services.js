"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repositories_1 = require("../repositories/user.repositories");
class UserService {
    constructor() {
        this.repo = new user_repositories_1.UserRepository();
    }
    createUser(name, email) {
        return this.repo.createUser(name, email);
    }
    getUsers() {
        return this.repo.findAllUsers();
    }
}
exports.UserService = UserService;
