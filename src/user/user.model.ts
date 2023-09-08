import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TRoles, User } from "./user.entity";


export class UserModel
{
    dataSource: DataSource
    userRepository: Repository<User>

    constructor(dataSource: DataSource)
    {
        this.dataSource = dataSource
        this.userRepository = dataSource.getRepository(User)
    }

    async addUser(username: string, role: TRoles): Promise<void>
    {
        const user = new User()
        user.username = username
        user.role = role

        await this.userRepository.save(user)
    }

    async deleteUser()
    {

    }

    
}