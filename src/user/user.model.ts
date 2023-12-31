import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TRoles, User } from "./user.entity";

export class UserModelClass {
  dataSource: DataSource;
  userRepository: Repository<User>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.userRepository = dataSource.getRepository(User);
  }

  async addUser(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async find(username: string) {
    return await this.userRepository.findOneBy({
      username: username,
    });
  }

  async deleteUser(username: string) {
    console.log("THIS IS USERNAME", username);
    return await this.userRepository.delete({ username: username });
  }
}

export const UserModel = new UserModelClass(AppDataSource);
