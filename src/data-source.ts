import { DataSource } from "typeorm";
import { UserCalories } from "./calories/calories.entity";
import { User } from "./user/user.entity";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "qwerty",
    database: "calories",
    entities: [User, UserCalories],
    synchronize: true,
    logging: true
})

