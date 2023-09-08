import { FastifyInstance } from "fastify";
import { app } from "../app";


export class UserController
{   
    constructor(app: FastifyInstance)
    {
        app.post('/user/create', (req, reply) => {
            console.log(req.body);
        })
    }
}
