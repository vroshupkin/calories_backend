import { FastifyInstance } from "fastify";
import { FastifyRequest } from "fastify/types/request";
import { app } from "../app";
import { TRoles, User } from "./user.entity";
import { UserModel, UserModelClass } from "./user.model";

type TUserBody = {
  username: string;
  role: TRoles;
};

export class UserController {
  constructor(app: FastifyInstance) {
    UserController.create(app);
    UserController.find(app);
    UserController.delete(app);

    return { message: "User Controller has been initiated" };
  }

  static find(app: FastifyInstance) {
    app.get<{ Querystring: { username: string } }>(
      "/user",

      async (req, reply) => {
        return await UserModel.find(req.query.username);
      },
    );
  }

  static create(app: FastifyInstance) {
    app.post<{ Body: string }>("/user/create", async (req, reply) => {
      const { username, role } = JSON.parse(req.body) as TUserBody;

      if (username && role) {
        try {
          await UserModel.addUser(new User(username, role));
          // @ts-ignore
        } catch (err: { code: number }) {
          return err;
        }

        reply.statusCode = 200;
        return { message: "User created!" };
      }
    });
  }

  static delete(app: FastifyInstance) {
    app.delete("/user/delete", async (req, res) => {
      const body = JSON.parse(req.body as string) as { username: string };

      await UserModel.deleteUser(body.username);
      return "ok";
    });
  }
  //
}
