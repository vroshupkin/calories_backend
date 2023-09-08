import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm"

export type TRoles = 'user' | 'admin' 

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    username: string

    @Column()
    role: TRoles

    @Column()
    created_at: Date
}
