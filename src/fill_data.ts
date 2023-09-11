import { AppDataSource } from "./data-source";
import { TRoles, User } from "./user/user.entity";

const new_user = (username: string, role: TRoles = "user") => {
  const user = new User(username, role);

  user.created_at = new Date();

  return user;
};

export async function fillUsers() {
  const userRepo = AppDataSource.getRepository(User);

  (
    [
      ["admin", "admin"],
      ["test", "user"],
    ] as [string, TRoles][]
  )
    .map(([user, role]) => new_user(user, role))
    .forEach(async (user) => {
      try {
        await userRepo.save(user);
      } catch (err) {}
    });
}
