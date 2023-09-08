import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../user/user.entity"

@Entity({name: 'calories'})
export class UserCalories {
    @PrimaryGeneratedColumn("increment")
    id: number

    @OneToOne(() => User, (user) => user.id)
    user_id: number

    @Column({type: 'date'})
    day: Date

    @Column({type: 'int'})
    calories: number

}

