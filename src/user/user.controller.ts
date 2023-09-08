import { FastifyInstance } from "fastify";
import { app } from "../app";
import { TRoles, User } from "./user.entity";
import { UserModel, UserModelClass } from "./user.model";


type TBodyCreateUser = {
    username: string,
    role: TRoles
}

export class UserController
{   
    constructor(app: FastifyInstance)
    {
        app.post<{Body:string}>('/user/create', async (req, reply) => {

            
            // const username = req.b`ody.username
            // const role = req.body.role

            // console.log(req.body['`'])
            // console.log(JSON.parse(req.body))

            const {username, role} = JSON.parse(req.body) as {username: string, role: TRoles}

            console.log(username, role)
            // console.log(Object.assign(req.body))
            // const a = Object.assign(req.body)
            // console.log(Object.entries(a))

            // console.log(username, role)

            if(username && role)
            { 
                console.log('pass')
                await UserModel.addUser(new User(username, role));

                return {message: 'User created!'}
            }
            
            return {message: 'hey you'}
        })
    }

    static create()
    {
        
    }
}
