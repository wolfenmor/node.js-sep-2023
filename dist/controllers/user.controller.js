"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_db_1 = require("../db/users.db");
class UserController {
    async findAll(req, res) {
        try {
            res.json(users_db_1.users);
        }
        catch (e) {
            return res.json({ message: e.message });
        }
    }
    create(req, res) {
        try {
            const user = req.body;
            users_db_1.users.push(user);
            res.status(201).json({ message: "user created" });
        }
        catch (e) {
            res.status(400);
        }
    }
    async updateById(req, res) {
        const { id } = req.params;
        const updatedUser = req.body;
        users_db_1.users[+id] = updatedUser;
        res.status(200).json({
            message: "user has been updated"
        });
    }
    async deleteById(req, res) {
        const { id } = req.params;
        users_db_1.users.splice(+id, 1);
        res.status(200).json({
            message: "user has been deleted"
        });
    }
}
exports.userController = new UserController();
