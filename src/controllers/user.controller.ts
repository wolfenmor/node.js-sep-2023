import {Request, Response} from "express";
import {users} from "../db/users.db";
import {IUser} from "../user.interface";

class UserController {
    public async findAll(req: Request, res: Response): Promise<Response<IUser[]>>{
        try {
            res.json(users)
        } catch (e) {
            return res.json({message: e.message})
        }
    }
    public create(req: Request, res: Response){
        try {
            const user = req.body
            users.push(user)
            res.status(201).json({message: "user created"})
        } catch (e) {
            res.status(400)
        }
    }
    public async updateById(req: Request, res: Response) {
        const {id} = req.params
        const updatedUser = req.body
        users[+id] = updatedUser
        res.status(200).json({
            message: "user has been updated"
        })
    }
    public async deleteById(req: Request, res: Response) {
        const {id} = req.params
        users.splice(+id, 1)
        res.status(200).json({
            message: "user has been deleted"
        })
    }
}

export const userController = new UserController();