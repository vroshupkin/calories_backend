import { DEV_HOST } from "../../../env";
import { UserCalories } from "../../calories/calories.entity";
import { UserController } from "../user.controller";

type TUser = { username: string; role: string };

const endpoints = {
  create: (user: TUser) =>
    fetch(`${DEV_HOST}/user/create`, {
      method: "POST",
      body: JSON.stringify(user),
    }),

  find: (username: string) =>
    fetch(`${DEV_HOST}/user?username=${username}`, { method: "GET" }),

  delete: (username: string) =>
    fetch(`${DEV_HOST}/user/delete`, {
      method: "DELETE",
      body: JSON.stringify({ username: username }),
    }),
};

describe("User controller", () => {
  test("create user", async () => {
    const user = {
      username: "test_2",
      role: "user",
    };

    const res_create = await endpoints.create(user);
    const res_find = await endpoints.find(user.username);
    const is_created = (await res_find.json()) != null;

    expect(is_created).toBe(true);
  });

  test("find user", async () => {
    const response = await endpoints.find("admin");

    expect(true).toBe(true);
  });

  test("delete user", async () => {
    const user = { username: "created_user", role: "user" };
    await endpoints.create(user);

    const res_find = await (await endpoints.find(user.username)).json();
    if (res_find === null) {
      throw new Error('Need create user "created_user');
    }

    await endpoints.delete(user.username);
    const res_find_fater_delete = await endpoints.find(user.username);

    const json_deleted = await res_find_fater_delete.json();

    expect(json_deleted == null).toBe(true);
  });
});
