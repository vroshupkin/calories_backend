import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from "typeorm";

export type TRoles = "user" | "admin";

// TODO Сделать уникальным имя пользователя

@Entity({ name: "users" })
export class User {
  constructor(username: string, role: TRoles = "user") {
    this.username = username;
    this.role = role;
  }

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  role: TRoles;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
}
